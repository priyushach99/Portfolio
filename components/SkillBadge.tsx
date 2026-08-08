"use client";

import { motion } from "framer-motion";


export default function SkillBadge({
  name,
}: {
  name: string;
}) {

return (

<motion.span

whileHover={{
  scale:1.08,
  y:-3
}}

transition={{
  type:"spring",
  stiffness:300
}}

className="
px-4
py-2
rounded-full
text-sm
border
border-white/10
bg-white/5
text-gray-300
hover:text-white
hover:border-blue-400/50
transition
cursor-default
"

>

{name}

</motion.span>

);

}