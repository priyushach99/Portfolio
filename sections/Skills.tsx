import { skillCategories } from "@/data/skills";
import SkillCard from "@/components/SkillCard";


export default function Skills(){

return (

<section
id="skills"
className="
px-6
md:px-20
py-16
"
>


<h2
className="
text-4xl
font-bold
text-center
mb-6
"
>

🛠️ Technical Skills

</h2>



<div
className="
grid
lg:grid-cols-3
gap-8
"
>

{skillCategories.map((category, index) => (
  <SkillCard
    key={`${category.title}-${index}`}
    {...category}
  />
))}


</div>


</section>

)

}