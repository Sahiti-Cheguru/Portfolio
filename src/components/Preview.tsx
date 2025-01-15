import { Gravity, MatterBody } from "@/components/ui/gravity";

function Preview() {
  return (
    <section
      id="playground"
      className="w-full h-[500px] relative bg-white dark:bg-gray-900 z-0 overflow-hidden"
    >
      <div className="w-[98%] h-[98%] mx-auto relative">
        <Gravity
          gravity={{ x: 0, y: 1 }}
          className="w-full h-full"
          grabCursor={true}
          debug={false}
          addTopWall={true}
        >
          {technologies.map((tech) => (
            <MatterBody
              key={tech.name}
              matterBodyOptions={{
                friction: 0.5,
                restitution: 0.2,
                density: 0.001,
                isStatic: false,
                collisionFilter: {
                  category: 0x0001,
                },
              }}
              isDraggable={true}
              x={tech.x}
              y={tech.y}
              angle={tech.angle || 0}
            >
              <div
                className={`${tech.size} hover:cursor-grab active:cursor-grabbing p-4`}
              >
                {tech.name}
              </div>
            </MatterBody>
          ))}
          <MatterBody
            matterBodyOptions={{
              friction: 0.5,
              restitution: 0.2,
              density: 0.001,
              isStatic: false,
              collisionFilter: {
                category: 0x0001,
              },
            }}
            isDraggable={true}
            x="60%"
            y="50%"
          >
            <img
              src="https://i.postimg.cc/svvKttzJ/image.png"
              alt="Tech illustration"
              className="w-auto h-auto max-w-none"
              style={{
                imageRendering: "auto",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
              }}
              loading="eager"
            />
          </MatterBody>
        </Gravity>
      </div>
    </section>
  );
}

const technologies = [
  {
    name: "🗽",
    x: "30%",
    y: "10%",
    size: "text-8xl sm:text-9xl md:text-[10rem]",
  },
  {
    name: "💻",
    x: "30%",
    y: "30%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🚀",
    x: "40%",
    y: "20%",
    angle: 10,
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🛩️",
    x: "75%",
    y: "10%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "⭐",
    x: "65%",
    y: "25%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🌟",
    x: "45%",
    y: "15%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
];

export { Preview };
