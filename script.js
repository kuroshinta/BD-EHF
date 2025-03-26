body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #f4f4f4;
  display: flex;
}

.timeline {
  position: fixed;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 5px;
  background: #333;
  z-index: 10;
}

.container {
  margin-left: 40px;
  padding: 20px;
  width: 100%;
}

.scene {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.scene img {
  width: 80%;
  max-width: 800px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  opacity: 1;
  transform: scale(1);
}
