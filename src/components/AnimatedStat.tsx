import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
  delay: number;
}

const AnimatedStat = ({ icon: Icon, value, label, color, delay }: AnimatedStatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`mb-4 ${color}`}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: delay + 0.1 }}
      >
        <p className="text-2xl md:text-3xl font-bold mb-1">{value}</p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
        className="text-gray-600"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedStat;