export const RollingText = () => {
  return (
    <h1 className="text-3xl md:text-6xl font-bold text-[#930000] mb-8 md:mb-10 flex h-9 md:h-16 overflow-hidden">
      {/* 1st columne */}
      <div className="flex flex-col items-center" style={{ animation: "moveUp200 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="leading-[40px] md:leading-[70px]">程</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">C</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">C</span>
      </div>
      
      {/* 2nd column */}
      <div className="flex flex-col-reverse items-center" style={{ animation: "moveDown300 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="md:leading-[70px]">式</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">O</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">O</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">O</span>
      </div>
      
      {/* 3rd column */}
      <div className="flex flex-col items-center" style={{ animation: "moveUp200 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="leading-[40px]  md:leading-[70px]">設</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">D</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">D</span>
      </div>
      
      {/* 4th column */}
      <div className="flex flex-col-reverse items-center" style={{ animation: "moveDown100 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="md:leading-[70px]">計</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">E</span>
      </div>
      
      {/* 5th column */}
      <div className="flex flex-col items-center" style={{ animation: "moveUp200 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="leading-[40px] md:leading-[70px]">師</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">R</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">R</span>
      </div>
      
      {/* 6th column */}
      <div className="flex flex-col-reverse items-center" style={{ animation: "moveDown300 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="md:leading-[70px]">盃</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">S</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">S</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">S</span>
      </div>
      
      {/* 7th column */}
      <div className="flex flex-col items-center" style={{ animation: "moveUp200 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="leading-[40px] md:leading-[70px]">杯</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">C</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">C</span>
      </div>
      
      {/* 8th column */}
      <div className="flex flex-col-reverse items-center" style={{ animation: "moveDown300 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="md:leading-[70px]">子</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">U</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">U</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">U</span>
      </div>

      {/* 9th column */}
      <div className="flex flex-col items-center" style={{ animation: "moveUp100 4s ease-in-out infinite alternate", animationDelay: "0.3s" }}>
        <span className="leading-[40px] md:leading-[70px]">的</span>
        <span className="font-micro-5 text-[64px] leading-[40px] md:text-9xl font-normal md:leading-[70px]">P</span>
      </div>

      <style>
          {`
            @keyframes moveUp200 {
              0% { transform: translateY(0); }
              10% { transform: translateY(0); }
              70% { transform: translateY(-220%); }
              100% { transform: translateY(-220%); }
            }

            @keyframes moveUp100 {
              0% { transform: translateY(0); }
              10% { transform: translateY(0); }
              70% { transform: translateY(-112%); }
              100% { transform: translateY(-112%); }
            }
    
            @keyframes moveDown300 {
              0% { transform: translateY(0%); }
              10% { transform: translateY(0%); }
              70% { transform: translateY(335%); }
              100% { transform: translateY(335%); }
            }
            
            @keyframes moveDown100 {
              0% { transform: translateY(0%); }
              10% { transform: translateY(0%); }
              70% { transform: translateY(115%); }
              100% { transform: translateY(115%); }
            }
         `}
        </style>
    </h1>

  );
}


