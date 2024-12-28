// Tạo cảnh
const scene = new THREE.Scene();

// Tạo camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 1, 2);

// Tạo bộ dựng hình
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Thêm điều khiển quỹ đạo
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Tạo hình lập phương với vật liệu dạng lưới
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x66ccff,
  wireframe: true
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Hàm render
function render() {
  // Xoay hình lập phương
  cube.rotation.y += 0.01;

  // Render cảnh
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(render);