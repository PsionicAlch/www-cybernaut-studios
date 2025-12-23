attribute float aSize;
attribute vec3 aColor;

uniform float uViewHeight;
uniform float uSize;

varying vec3 vColor;

void main() {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uSize * uViewHeight;

  vColor = aColor;
}