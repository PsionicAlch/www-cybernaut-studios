uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOutterColor;
uniform sampler2D uNoiseTexture;

varying vec2 vUv;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

vec3 blendAdd(vec3 base, vec3 blend) {
	return min(base + blend, vec3(1.0));
}

void main() {
  vec4 color = vec4(0.0);
  color.a = 1.0;

  float iterations = 3.0;

  for (float i = 0.0; i < iterations; i++) {
    float progress = i / (iterations - 1.0);

    float intensity = 1.0 - ((vUv.y - progress) * iterations) * 0.5;
    intensity = smoothstep(0.0, 1.0, intensity);

    vec2 uv = vUv;
    uv.y *= 2.0;
    uv.x += uTime / ((i * 10.0) + 1.0);

    vec3 ringColor = mix(uInnerColor, uOutterColor, progress);

    float noiseIntensity = texture(uNoiseTexture, uv).r;

    ringColor = mix(vec3(0.0), ringColor.rgb, noiseIntensity * intensity);

    color.rgb = blendAdd(color.rgb, ringColor);
  }

  float edgesAttenuation = min(inverseLerp(vUv.y, 0.0, 0.02), inverseLerp(vUv.y, 1.0, 0.5));

  color.rgb = mix(vec3(0.0), color.rgb, edgesAttenuation);

  gl_FragColor = color;
}