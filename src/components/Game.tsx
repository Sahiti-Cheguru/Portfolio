import { Gravity, MatterBody } from "@/components/ui/gravity";

function Game() {
  return (
    <div className="w-full h-screen md:h-[calc(100vh-4rem)] relative font-azeretMono overflow-hidden">
      <div className="absolute inset-0 z-10"></div>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{
            friction: 0.5,
            restitution: 0.2,
            density: 0.001,
            isStatic: false,
            chamfer: { radius: 5 },
          }}
          isDraggable={true}
          x="30%"
          y="30%"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            react
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="40%"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            typescript
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="35%"
          angle={10}
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-[#1f464d] text-white rounded-full hover:cursor-grab px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            motion
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="60%"
          y="30%"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-[#ff5941] text-white rounded-full hover:cursor-grab px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            tailwind
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="70%"
          y="40%"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-orange-500 text-white rounded-full hover:cursor-grab px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            drei
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="45%"
          y="25%"
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl bg-[#ffd726] text-white rounded-full hover:cursor-grab px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4">
            matter-js
          </div>
        </MatterBody>
      </Gravity>
    </div>
  );
}

export default Game;
