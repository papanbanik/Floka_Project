import { motion } from "framer-motion";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
];

const Card = () => {
  return (
    <div className="overflow-hidden w-full py-10 bg-black">

      <motion.div
        className="flex gap-20 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-12 w-auto object-contain bg-white p-2 rounded"
          />
        ))}
      </motion.div>

    </div>
  );
};

export default Card;