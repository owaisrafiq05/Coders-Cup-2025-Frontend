import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section className="rounded-t-[50px] bg-[#7E0000] w-full py-1 md:py-2 overflow-visible lg:max-h-[360px]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-[#FEFEEA] py-4 px-10 text-center w-full flex flex-col gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            In Collaboration With Tekno Fest Pakistan
          </motion.h2>
          <motion.img 
            src="teknofest.png" 
            alt="" 
            className="h-20 sm:h-30 md:h-40"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
          {/* <div className="flex items-center justify-center gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-wide">Tekno Fest Pakistan</h2>
          </div> */}

          {/* <div className="px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">

              Reusable logo circle
              {[
                { src: "toyota-logo.png", alt: "Toyota" },
                { src: "suzuki-logo.png", alt: "Suzuki" },
                { src: "bmw-logo.png", alt: "BMW" },
                { src: "mitsubishi-logo.png", alt: "Mitsubishi" },
                { src: "honda-logo.png", alt: "Honda" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-[#FEFEEA] flex items-center justify-center shadow-md"
                  aria-label={`${logo.alt} logo`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-[65%] max-h-[65%] object-contain"
                  />
                </div>
              ))}

            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
