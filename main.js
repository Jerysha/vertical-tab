const labels = document.querySelectorAll("label");
const titleElement = document.getElementById("title");
const paragraphElement = document.getElementById("paragraph");

labels.forEach(label => {
    label.addEventListener("click", () => {
        const labelText = label.querySelector("span").textContent;
        titleElement.textContent = `${labelText}`;
        paragraphElement.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aperiam unde reprehenderit! Beatae suscipit iste reiciendis in tenetur totam possimus temporibus commodi voluptas pariatur praesentium ex quis ipsa at, corrupti asperiores?
        Nemo culpa corporis accusamus nesciunt deleniti, repudiandae saepe alias neque reprehenderit repellat. Eum ut consequuntur dolore eaque hic eos non ducimus reiciendis repellendus facere veritatis beatae voluptate placeat dicta amet
        quia aliquid rem voluptatem magnam iste iure, optio aspernatur libero?`;
    });
});