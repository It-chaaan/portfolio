export type RopeParticle = { x: number; y: number; previousX: number; previousY: number; pinned?: boolean };
export type RopePoint = { x: number; y: number };

export const ROPE_POINT_COUNT = 12;
export const ROPE_SEGMENT_LENGTH = 10;

export function createRope(anchor: RopePoint, count = ROPE_POINT_COUNT, length = ROPE_SEGMENT_LENGTH): RopeParticle[] {
  return Array.from({ length: count }, (_, index) => ({ x: anchor.x, y: anchor.y + index * length, previousX: anchor.x, previousY: anchor.y + index * length, pinned: index === 0 }));
}

export function clampEndpoint(point: RopePoint, rest: RopePoint, anchor: RopePoint): RopePoint {
  const maxX = 34; const maxDown = 58;
  const horizontal = Math.max(-maxX, Math.min(maxX, point.x - rest.x));
  const vertical = Math.max(-8, Math.min(maxDown, point.y - rest.y));
  const ratio = (horizontal / maxX) ** 2 + (vertical / maxDown) ** 2;
  const scale = ratio > 1 ? 1 / Math.sqrt(ratio) : 1;
  return { x: Math.max(anchor.x - 62, Math.min(anchor.x + 62, rest.x + horizontal * scale)), y: Math.max(anchor.y + 24, rest.y + vertical * scale) };
}

export function stepRope(particles: RopeParticle[], anchor: RopePoint, endpoint: RopePoint | null, reducedMotion: boolean) {
  const damping = reducedMotion ? 0.7 : 0.965;
  const gravity = reducedMotion ? 0.35 : 0.12;
  particles.forEach((particle, index) => {
    if (index === 0) { particle.x = anchor.x; particle.y = anchor.y; particle.previousX = anchor.x; particle.previousY = anchor.y; return; }
    const velocityX = (particle.x - particle.previousX) * damping;
    const velocityY = (particle.y - particle.previousY) * damping;
    particle.previousX = particle.x; particle.previousY = particle.y;
    particle.x += velocityX; particle.y += velocityY + gravity;
  });
  const last = particles.at(-1);
  if (endpoint && last) { last.x = endpoint.x; last.y = endpoint.y; }
  for (let iteration = 0; iteration < 5; iteration += 1) {
    particles[0].x = anchor.x; particles[0].y = anchor.y;
    for (let index = 0; index < particles.length - 1; index += 1) {
      const first = particles[index]; const second = particles[index + 1];
      const dx = second.x - first.x; const dy = second.y - first.y; const distance = Math.hypot(dx, dy) || 0.0001;
      const correction = (distance - ROPE_SEGMENT_LENGTH) / distance;
      if (index === 0) { second.x -= dx * correction; second.y -= dy * correction; }
      else if (endpoint && index + 1 === particles.length - 1) { first.x += dx * correction; first.y += dy * correction; }
      else { first.x += dx * correction * .5; first.y += dy * correction * .5; second.x -= dx * correction * .5; second.y -= dy * correction * .5; }
    }
    if (endpoint && last) { last.x = endpoint.x; last.y = endpoint.y; }
  }
}

export function ropePath(particles: RopeParticle[]) {
  if (particles.length < 2 || particles.some((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y))) return "";
  let path = `M ${particles[0].x.toFixed(2)} ${particles[0].y.toFixed(2)}`;
  for (let index = 1; index < particles.length - 1; index += 1) {
    const current = particles[index]; const next = particles[index + 1];
    path += ` Q ${current.x.toFixed(2)} ${current.y.toFixed(2)} ${((current.x + next.x) / 2).toFixed(2)} ${((current.y + next.y) / 2).toFixed(2)}`;
  }
  const last = particles.at(-1)!;
  return `${path} L ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;
}

export function ropeEnergy(particles: RopeParticle[]) { return particles.reduce((sum, point) => sum + Math.abs(point.x - point.previousX) + Math.abs(point.y - point.previousY), 0) / particles.length; }
