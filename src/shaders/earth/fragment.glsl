uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform sampler2D uSpecularCloudsTexture;
uniform vec3 uSunDirection;
uniform float uCloudMix;
uniform vec3 uAtmosphereDayColor;
uniform vec3 uAtmosphereTwilightColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vec3 viewDirection = normalize(vPosition - cameraPosition);
  vec3 normal = normalize(vNormal);
  vec3 color = vec3(0.0);

  float sunOrientation = dot(normalize(uSunDirection), normal);
  float dayMix = smoothstep(-0.25, 0.5, sunOrientation);

  vec3 dayColor = texture(uDayTexture, vUv).rgb;
  vec3 nightColor = texture(uNightTexture, vUv).rgb;

  color = mix(nightColor, dayColor, dayMix);

  vec2 specularCloudColor = texture(uSpecularCloudsTexture, vUv).rg;
  float cloudsMix = smoothstep(uCloudMix, 1.0, specularCloudColor.g);
  cloudsMix *= dayMix;

  color = mix(color, vec3(1.0), cloudsMix);

  gl_FragColor = vec4(color, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}