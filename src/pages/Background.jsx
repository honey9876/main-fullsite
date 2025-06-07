// import React from "react";

// const Background = () => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         background: "#dee6d0",
//         overflow: "hidden",
//         zIndex: -1,
//       }}
//     >
//       {/* 3D Cube Grid Background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           perspective: "1000px",
//           zIndex: 0,
//         }}
//       >
//         {[...Array(10)].map((_, i) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               width: "50px",
//               height: "50px",
//               background: "none",
//               border: "1px solid rgba(30, 144, 255, 0.2)",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `cubeRotate ${5 + Math.random() * 5}s linear infinite`,
//               transformStyle: "preserve-3d",
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(30, 144, 255, 0.1)",
//                 transform: "rotateY(0deg) translateZ(25px)",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(30, 144, 255, 0.1)",
//                 transform: "rotateY(90deg) translateZ(25px)",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(30, 144, 255, 0.1)",
//                 transform: "rotateX(90deg) translateZ(25px)",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Custom CSS for Animation */}
//       <style>{`
//         @keyframes cubeRotate {
//           0% { transform: rotateX(0deg) rotateY(0deg); }
//           100% { transform: rotateX(360deg) rotateY(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Background;

// import React, { useEffect } from 'react';

// const Background = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('hero-canvas');
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     let particles = [];

//     for (let i = 0; i < 150; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         r: Math.random() * 1.5 + 0.5,
//         dx: Math.random() * 0.5 - 0.25,
//         dy: Math.random() * 0.5 - 0.25,
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Light grid
//       for (let x = 0; x < canvas.width; x += 50) {
//         for (let y = 0; y < canvas.height; y += 50) {
//           ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
//           ctx.fillRect(x, y, 1, 1);
//         }
//       }

//       // Particles
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
//         ctx.fill();
//       });

//       // Connections
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
//             ctx.stroke();
//           }
//         }
//       }

//       // Move
//       particles.forEach(p => {
//         p.x += p.dx;
//         p.y += p.dy;

//         if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
//       });

//       requestAnimationFrame(draw);
//     }

//     draw();
//   }, []);

//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       zIndex: -1,
//       width: '100%',
//       height: '100%',
//       background: 'linear-gradient(180deg, #dee6d0, #d1dcc3)',
//       overflow: 'hidden',
//     }}>
//       <canvas
//         id="hero-canvas"
//         style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//         }}
//       />
//     </div>
//   );
// };

// export default Background;

// import React, { useEffect, useRef } from "react";

// const Background = () => {
//   const particleContainerRef = useRef(null);
//   const connectionsRef = useRef([]);
//   const mousePos = useRef({ x: 0, y: 0 });

//   // Initialize particles and handle mouse interactions
//   useEffect(() => {
//     const container = particleContainerRef.current;
//     const particles = container.querySelectorAll(".particle");
//     const connectionsContainer = container.querySelector(".connections");

//     // Store particle positions and base positions
//     const particleData = Array.from(particles).map((particle) => ({
//       element: particle,
//       baseX: parseFloat(particle.style.left),
//       baseY: parseFloat(particle.style.top),
//       zDepth: parseFloat(particle.dataset.depth),
//       x: 0,
//       y: 0,
//       z: 0,
//     }));

//     // Update mouse position
//     const handleMouseMove = (e) => {
//       mousePos.current = {
//         x: (e.clientX / window.innerWidth) * 100, // Convert to percentage
//         y: (e.clientY / window.innerHeight) * 100,
//       };
//     };

//     // Animation loop for particle repulsion, wave effect, and connections
//     let lastTime = 0;
//     const animate = (time) => {
//       const deltaTime = (time - lastTime) / 1000; // Time difference in seconds
//       lastTime = time;

//       particleData.forEach((p, i) => {
//         const { element, baseX, baseY, zDepth } = p;

//         // Repulsion from mouse
//         const dx = baseX - mousePos.current.x;
//         const dy = baseY - mousePos.current.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
//         const maxDistance = 20; // Repulsion radius (in %)
//         let repelForce = 0;
//         if (distance < maxDistance) {
//           repelForce = (1 - distance / maxDistance) * 5; // Max repulsion of 5%
//         }
//         const repelX = (dx / distance) * repelForce || 0;
//         const repelY = (dy / distance) * repelForce || 0;

//         // Wave effect
//         const waveDistance = distance;
//         const waveAmplitude = 50; // Max z-offset in pixels
//         const waveFrequency = 0.1; // Controls wave spread
//         const wavePhase = (time / 1000) * 2; // Wave speed
//         const waveOffset =
//           Math.sin(waveDistance * waveFrequency - wavePhase) *
//           waveAmplitude *
//           (1 / (1 + waveDistance * 0.1));

//         // Update particle position
//         p.x = baseX + repelX;
//         p.y = baseY + repelY;
//         p.z = waveOffset * zDepth;
//         element.style.transform = `translateZ(${p.z}px) translate(${
//           p.x - baseX
//         }%, ${p.y - baseY}%)`;
//       });

//       // Update connections
//       connectionsContainer.innerHTML = ""; // Clear previous connections
//       const newConnections = [];
//       for (let i = 0; i < particleData.length; i++) {
//         for (let j = i + 1; j < particleData.length; j++) {
//           const p1 = particleData[i];
//           const p2 = particleData[j];
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           const maxDistance = 15; // Max distance for connection (in %)

//           if (distance < maxDistance) {
//             const opacity = 0.2 * (1 - distance / maxDistance);
//             const angle = Math.atan2(dy, dx) * (180 / Math.PI);
//             const length = distance;

//             const connection = document.createElement("div");
//             connection.className = "connection";
//             connection.style.position = "absolute";
//             connection.style.left = `${p1.x}%`;
//             connection.style.top = `${p1.y}%`;
//             connection.style.width = `${length}%`;
//             connection.style.height = "1px";
//             connection.style.background = `rgba(255, 255, 255, ${opacity})`;
//             connection.style.transformOrigin = "0 0";
//             connection.style.transform = `rotate(${angle}deg)`;
//             connection.style.pointerEvents = "none";
//             connectionsContainer.appendChild(connection);
//             newConnections.push(connection);
//           }
//         }
//       }
//       connectionsRef.current = newConnections;

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100vh",
//         background:
//           "radial-gradient(circle at center, #dee6d0 0%, #c3d5a9 50%, #e0f0e0 100%)",
//         animation: "gradientShift 15s ease-in-out infinite",
//         overflow: "hidden",
//         zIndex: -1,
//       }}
//     >
//       {/* Particle Container */}
//       <div
//         ref={particleContainerRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           perspective: "1000px",
//           zIndex: 0,
//         }}
//       >
//         {/* Connections Layer */}
//         <div
//           className="connections"
//           style={{ position: "absolute", width: "100%", height: "100%" }}
//         />

//         {/* Particles */}
//         {[...Array(50)].map((_, i) => {
//           const depth = Math.random() * 0.8 + 0.2; // Depth between 0.2 and 1
//           const size = 4 + Math.random() * 4; // Size between 4px and 8px
//           const duration = 5 + Math.random() * 5; // Oscillation duration between 5s and 10s
//           const delay = Math.random() * 5; // Delay between 0s and 5s
//           const posX = (i % 10) * 10 + 5; // Grid layout: 10 columns
//           const posY = Math.floor(i / 10) * 20 + 10; // 5 rows

//           return (
//             <div
//               key={i}
//               className="particle"
//               data-depth={depth}
//               style={{
//                 position: "absolute",
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 background: "rgba(255, 255, 255, 0.5)",
//                 borderRadius: "50%",
//                 boxShadow: `0 0 ${
//                   size * 2
//                 }px ${size}px rgba(255, 255, 255, 0.3)`,
//                 left: `${posX}%`,
//                 top: `${posY}%`,
//                 animation: `oscillate ${duration}s ease-in-out infinite`,
//                 animationDelay: `-${delay}s`,
//                 transform: `translateZ(0)`,
//                 transformStyle: "preserve-3d",
//                 willChange: "transform",
//               }}
//             />
//           );
//         })}
//       </div>

//       {/* Custom CSS for Animations */}
//       <style>{`
//         @keyframes gradientShift {
//           0% { background: radial-gradient(circle at center, #dee6d0 0%, #c3d5a9 50%, #e0f0e0 100%); }
//           50% { background: radial-gradient(circle at center, #e0f0e0 0%, #dee6d0 50%, #c3d5a9 100%); }
//           100% { background: radial-gradient(circle at center, #dee6d0 0%, #c3d5a9 50%, #e0f0e0 100%); }
//         }

//         @keyframes oscillate {
//           0% { transform: translateZ(0) translate(0, 0); }
//           50% { transform: translateZ(0) translate(${Math.random() * 2 - 1}%, ${
//         Math.random() * 2 - 1
//       }%); }
//           100% { transform: translateZ(0) translate(0, 0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Background;

import React, { useEffect, useRef } from "react";

const Background = () => {
  const networkContainerRef = useRef(null);
  const connectionsRef = useRef([]);
  const mousePos = useRef({ x: -1000, y: -1000 }); // Initialize off-screen

  // Initialize nodes and handle interactions
  useEffect(() => {
    const container = networkContainerRef.current;
    const nodes = container.querySelectorAll(".node");
    const connectionsContainer = container.querySelector(".connections");

    // Define clusters and hubs
    const clusters = [
      { hub: { x: 30, y: 30 }, nodes: [] }, // Cluster 1
      { hub: { x: 50, y: 70 }, nodes: [] }, // Cluster 2
      { hub: { x: 70, y: 40 }, nodes: [] }, // Cluster 3
    ];

    // Assign nodes to clusters
    const nodeData = Array.from(nodes).map((node, i) => {
      const isHub = i % 10 === 0; // Every 10th node is a hub
      const clusterIndex = isHub
        ? Math.floor(i / 10)
        : Math.floor(Math.random() * 3);
      const cluster = clusters[clusterIndex];
      const radius = isHub ? 0 : 10 + Math.random() * 5; // Orbital radius for non-hubs
      const angle = Math.random() * 2 * Math.PI; // Random starting angle
      const depth = Math.random() * 0.6 + 0.4; // Depth between 0.4 and 1

      if (isHub) {
        node.classList.add("hub");
        return {
          element: node,
          x: cluster.hub.x,
          y: cluster.hub.y,
          baseX: cluster.hub.x,
          baseY: cluster.hub.y,
          radius: 0,
          angle,
          depth,
          isHub: true,
          clusterIndex,
        };
      } else {
        cluster.nodes.push(i);
        return {
          element: node,
          x: 0,
          y: 0,
          baseX: cluster.hub.x,
          baseY: cluster.hub.y,
          radius,
          angle,
          depth,
          isHub: false,
          clusterIndex,
        };
      }
    });

    // Update mouse position
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    // Animation loop for orbital motion, connections, and pulses
    let lastTime = 0;
    const animate = (time) => {
      const deltaTime = (time - lastTime) / 1000;
      lastTime = time;

      // Update node positions (orbital motion)
      nodeData.forEach((node) => {
        const { element, baseX, baseY, radius, depth, isHub } = node;
        if (!isHub) {
          node.angle += deltaTime * (0.5 + depth); // Orbital speed based on depth
          node.x = baseX + Math.cos(node.angle) * radius;
          node.y = baseY + Math.sin(node.angle) * radius;
        } else {
          node.x = baseX;
          node.y = baseY;
        }

        // Check proximity to mouse for interactivity
        const dx = node.x - mousePos.current.x;
        const dy = node.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 10; // Interaction radius (in %)
        const glowIntensity =
          distance < maxDistance ? 1 - distance / maxDistance : 0;

        // Apply glow effect
        const baseGlow = isHub ? 8 : 4;
        element.style.boxShadow = `0 0 ${baseGlow + glowIntensity * 10}px ${
          baseGlow / 2 + glowIntensity * 5
        }px ${isHub ? "rgba(255, 215, 0, 0.5)" : "rgba(255, 255, 255, 0.3)"}`;
        element.dataset.glow = glowIntensity;

        // Update position
        element.style.left = `${node.x}%`;
        element.style.top = `${node.y}%`;
        element.style.transform = `translateZ(${
          depth * 50
        }px) translate(-50%, -50%)`;
      });

      // Update connections and pulses
      connectionsContainer.innerHTML = "";
      const newConnections = [];
      clusters.forEach((cluster, clusterIndex) => {
        // Connect hubs to each other
        if (clusterIndex < clusters.length - 1) {
          const hub1 = nodeData[clusterIndex * 10];
          const hub2 = nodeData[(clusterIndex + 1) * 10];
          if (hub1 && hub2) {
            createConnection(
              hub1,
              hub2,
              connectionsContainer,
              newConnections,
              time,
              true
            );
          }
        }

        // Connect nodes within the cluster to the hub and to each other
        cluster.nodes.forEach((nodeIdx) => {
          const node = nodeData[nodeIdx];
          const hub = nodeData[clusterIndex * 10];
          createConnection(
            node,
            hub,
            connectionsContainer,
            newConnections,
            time,
            false
          );

          // Connect to nearby nodes in the same cluster
          cluster.nodes.forEach((otherNodeIdx) => {
            if (nodeIdx !== otherNodeIdx) {
              const otherNode = nodeData[otherNodeIdx];
              const dx = node.x - otherNode.x;
              const dy = node.y - otherNode.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 8) {
                // Connect nodes within 8%
                createConnection(
                  node,
                  otherNode,
                  connectionsContainer,
                  newConnections,
                  time,
                  false
                );
              }
            }
          });
        });
      });

      connectionsRef.current = newConnections;
      requestAnimationFrame(animate);
    };

    // Function to create a connection with a pulse
    const createConnection = (
      node1,
      node2,
      container,
      connectionsArray,
      time,
      isHubConnection
    ) => {
      const dx = node2.x - node1.x;
      const dy = node2.y - node1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const glow = Math.max(
        parseFloat(node1.element.dataset.glow),
        parseFloat(node2.element.dataset.glow)
      );
      const opacity = 0.1 + glow * 0.2;

      // Connection line
      const connection = document.createElement("div");
      connection.className = "connection";
      connection.style.position = "absolute";
      connection.style.left = `${node1.x}%`;
      connection.style.top = `${node1.y}%`;
      connection.style.width = `${distance}%`;
      connection.style.height = "1px";
      connection.style.background = isHubConnection
        ? `rgba(255, 215, 0, ${opacity})`
        : `rgba(46, 74, 53, ${opacity})`;
      connection.style.transformOrigin = "0 0";
      connection.style.transform = `rotate(${angle}deg)`;
      connection.style.pointerEvents = "none";
      container.appendChild(connection);
      connectionsArray.push(connection);

      // Pulse effect
      const pulse = document.createElement("div");
      pulse.className = "pulse";
      pulse.style.position = "absolute";
      pulse.style.left = `${node1.x}%`;
      pulse.style.top = `${node1.y}%`;
      pulse.style.width = "4px";
      pulse.style.height = "4px";
      pulse.style.background = isHubConnection
        ? "rgba(255, 215, 0, 0.8)"
        : "rgba(46, 74, 53, 0.8)";
      pulse.style.borderRadius = "50%";
      pulse.style.transformOrigin = "0 0";
      pulse.style.transform = `rotate(${angle}deg)`;
      pulse.style.animation = `pulseTravel ${
        2 + Math.random() * 2
      }s linear infinite`;
      pulse.style.animationDelay = `-${Math.random() * 4}s`;
      container.appendChild(pulse);
      connectionsArray.push(pulse);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        background:
          "radial-gradient(circle at center, #dee6d0 0%, #c3d5a9 100%)",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Futuristic Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
          linear-gradient(45deg, rgba(46, 74, 53, 0.05) 1px, transparent 1px, transparent 49px, rgba(46, 74, 53, 0.05) 50px),
          linear-gradient(-45deg, rgba(46, 74, 53, 0.05) 1px, transparent 1px, transparent 49px, rgba(46, 74, 53, 0.05) 50px)
        `,
          backgroundSize: "50px 50px",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Network Container */}
      <div
        ref={networkContainerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          perspective: "1000px",
          zIndex: 1,
        }}
      >
        {/* Connections and Pulses Layer */}
        <div
          className="connections"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />

        {/* Nodes */}
        {[...Array(30)].map((_, i) => {
          const size = i % 10 === 0 ? 8 : 4; // Hubs are larger
          const duration = 10 + Math.random() * 10; // Orbital duration between 10s and 20s

          return (
            <div
              key={i}
              className="node"
              style={{
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                background:
                  i % 10 === 0
                    ? "rgba(255, 215, 0, 0.8)"
                    : "rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                boxShadow:
                  i % 10 === 0
                    ? "0 0 8px 4px rgba(255, 215, 0, 0.5)"
                    : "0 0 4px 2px rgba(255, 255, 255, 0.3)",
                animation: `pulseGlow ${duration}s ease-in-out infinite`,
                transform: "translate(-50%, -50%)",
                transformStyle: "preserve-3d",
                willChange: "transform, box-shadow",
              }}
            />
          );
        })}
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes pulseGlow {
          0% { opacity: 0.8; }
          50% { opacity: 1; }
          100% { opacity: 0.8; }
        }

        @keyframes pulseTravel {
          0% { transform: rotate(var(--angle)) translateX(0) scale(1); opacity: 0.8; }
          100% { transform: rotate(var(--angle)) translateX(100%) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Background;
