import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodeCount = 60;
    const connectionDist = 150;

    // Initialize nodes evenly spread using grid-based distribution
    const cols = Math.ceil(Math.sqrt(nodeCount * (canvas.width / canvas.height)));
    const rows = Math.ceil(nodeCount / cols);
    const cellW = canvas.width / cols;
    const cellH = canvas.height / rows;

    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: cellW * (col + 0.2 + Math.random() * 0.6),
        y: cellH * (row + 0.2 + Math.random() * 0.6),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: 1.2 + Math.random() * 1,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.2;
            const pulse = Math.sin(time * 0.0015 + nodes[i].pulsePhase) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(130, 210, 255, ${alpha * (0.4 + pulse * 0.3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.3 + 0.7;
        // Subtle glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        grad.addColorStop(0, `rgba(130, 210, 255, ${0.2 * pulse})`);
        grad.addColorStop(1, "rgba(130, 210, 255, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 220, 255, ${0.5 + pulse * 0.3})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralNetwork;
