"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: string[];
  github: string;
};


export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  metrics,
  github,
}: ProjectProps) {


return (

<motion.div

initial={{
 opacity:0,
 y:40
}}

whileInView={{
 opacity:1,
 y:0
}}

viewport={{
 once:true
}}

transition={{
 duration:0.5
}}

whileHover={{
 y:-8
}}

className="
group
rounded-2xl
border
border-white/10
bg-white/5
p-6
backdrop-blur
hover:border-white/30
transition
"

>


<h3 className="
text-2xl
font-bold
">

{title}

</h3>


<p className="
text-sm
text-blue-400
mt-2
">

{subtitle}

</p>


<p className="
text-gray-400
mt-4
leading-relaxed
">

{description}

</p>



{/* Tech Stack */}

<div className="
flex
flex-wrap
gap-2
mt-5
">

{tech.map((item)=>(

<span
key={item}
className="
px-3
py-1
rounded-full
text-xs
bg-white/10
text-gray-300
"
>

{item}

</span>

))}

</div>



{/* Metrics */}

<div className="
mt-6
space-y-2
">

{
metrics.map((metric)=>(
<div
key={metric}
className="
text-sm
text-gray-300
flex
items-center
gap-2
"
>

<span className="text-green-400">
✓
</span>

{metric}

</div>
))
}

</div>



{/* Buttons */}

<div className="
flex
gap-4
mt-8
">


<a
href={github}
target="_blank"
className="
flex
items-center
gap-2
rounded-full
border
border-white/20
px-5
py-2
text-sm
hover:bg-white/10
transition
"
>

<FaGithub size={16}/>
Github

</a>



</div>


</motion.div>

)

}