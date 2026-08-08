import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";


export default function Projects(){

return(

<section 
id="projects"
className="
px-6
md:px-20
py-16
">


<h2 className="
text-4xl
font-bold
mb-6
">
Projects
</h2>


<div className="
grid
md:grid-cols-2
gap-8
">


{
projects.map((project)=>(
<ProjectCard
key={project.title}
{...project}
/>
))
}


</div>


</section>

)

}