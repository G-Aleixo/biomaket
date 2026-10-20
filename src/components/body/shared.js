// Contorno branco usado nas glândulas desenhadas para destacá-las dos órgãos de referência.
export const GLAND_STROKE = { stroke: "#fff", strokeWidth: 0.8 };

// O tronco é desenhado "alto" e comprimido na vertical por TORSO_K (menor = corpo mais curto).
// A compressão parte do pescoço (TORSO_Y0), então a cabeça não muda.
export const TORSO_K = 0.76;
export const TORSO_Y0 = 62;
export const TORSO_TRANSFORM = `translate(0 ${TORSO_Y0 * (1 - TORSO_K)}) scale(1 ${TORSO_K})`;
export const squashY = (y) => TORSO_Y0 + (y - TORSO_Y0) * TORSO_K;
