"use client";


export default function Navbar(){

return (

<nav
className="
fixed
top-0
z-50
w-full
backdrop-blur-xl
bg-black/40
border-b
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
flex
items-center
justify-between
px-2
py-2
"
>


<div
className="
text-xl
font-bold
"
>

&lt;PC/&gt;

</div>



<div
className="
hidden
md:flex
gap-10
text-gray-300
"
>

<a href="#about">
About
</a>


<a href="#skills">
Skills
</a>


<a href="#experience">
Experience
</a>


<a href="#projects">
Projects
</a>


<a href="#contact">
Contact
</a>


</div>



<a

href="/resume.pdf"

className="
border
border-white/30
rounded-xl
px-2
py-2
hover:bg-white
hover:text-black
transition
"

>

📄 Request Resume

</a>



</div>

</nav>

)

}