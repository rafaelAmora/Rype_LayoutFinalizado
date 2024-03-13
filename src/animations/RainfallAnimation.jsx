import React from "react"

const RainfallAnimation = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    canvas.style.background = "#121220"
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size to match window size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create an array to store the raindrops
    const raindrops = []

    // Function to create a new raindrop
    function createRaindrop() {
      const x = Math.random() * canvas.width
      const y = -5
      const speed = Math.random() * 5 + 2
      const length = Math.random() * 20 + 10

      raindrops.push({ x, y, speed, length })
    }

    // Function to update the raindrops' positions
    function updateRaindrops() {
      for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i]

        raindrop.y += raindrop.speed

        if (raindrop.y > canvas.height) {
          raindrops.splice(i, 1)
          i--
        }
      }
    }

    // Function to draw the raindrops
    function drawRaindrops() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = "white"
      ctx.lineWidth = 2

      for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i]

        ctx.beginPath()
        ctx.moveTo(raindrop.x, raindrop.y)
        ctx.lineTo(raindrop.x, raindrop.y + raindrop.length)
        ctx.stroke()
      }
    }

    // Function to animate the raindrops
    function animate() {
      createRaindrop()
      updateRaindrops()
      drawRaindrops()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start the animation
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} id="rainfall" />
}

export default RainfallAnimation
