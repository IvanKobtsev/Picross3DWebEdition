import { Coordinate } from "./types";
import * as THREE from "three";

export function clamp(value: number, min: number, max: number) {
  return Math.max(Math.min(value, max), min);
}

export function coordinateSum(c1: Coordinate, c2: Coordinate) {
  return {
    x: c1.x + c2.x,
    y: c1.y + c2.y,
    z: c1.z + c2.z,
  };
}

export function coordinateDif(c1: Coordinate, c2: Coordinate) {
  return {
    x: c1.x - c2.x,
    y: c1.y - c2.y,
    z: c1.z - c2.z,
  };
}

export function degreesToQuaternion(rotation: Coordinate): THREE.Quaternion {
  const quaternion = new THREE.Quaternion();
  const euler = new THREE.Euler(
    THREE.MathUtils.degToRad(rotation.x),
    THREE.MathUtils.degToRad(rotation.y),
    THREE.MathUtils.degToRad(rotation.z),
    "XYZ",
  );
  quaternion.setFromEuler(euler);
  return quaternion;
}

export function quaternionToDegrees(quaternion: THREE.Quaternion): Coordinate {
  const euler = new THREE.Euler().setFromQuaternion(quaternion, "XYZ");
  return {
    x: THREE.MathUtils.radToDeg(euler.x),
    y: THREE.MathUtils.radToDeg(euler.y),
    z: THREE.MathUtils.radToDeg(euler.z),
  };
}

export function rotateObject(
  rotation: Coordinate,
  deltaX: number,
  deltaY: number,
  rotationSpeed: number = 0.01,
) {
  const quaternion = degreesToQuaternion(rotation);

  const angleX = deltaX * rotationSpeed;
  const angleY = deltaY * rotationSpeed;

  const quaternionX = new THREE.Quaternion();
  const quaternionY = new THREE.Quaternion();
  const quaternionZ = new THREE.Quaternion();

  quaternionY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angleX);
  quaternionX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -angleY);
  quaternion.multiplyQuaternions(quaternionY, quaternion);
  quaternion.multiplyQuaternions(quaternionX, quaternion);
  quaternion.multiplyQuaternions(quaternionZ, quaternion);

  return quaternionToDegrees(quaternion);
}

const audioContext = new AudioContext();

export function playSound(src: string, volume: number = 1) {
  fetch(src)
    .then((response) => response.arrayBuffer())
    .then((data) => audioContext.decodeAudioData(data))
    .then((buffer) => {
      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();

      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);

      gainNode.gain.value = volume;
      source.start();
    })
    .catch(console.error);
}
