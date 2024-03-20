import styles from "./BlogArticleContainer.module.scss";
import felix3 from "../../assets/img/felix3.jpg";

function BlogArticleContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["header-picture"]}>
        <img src={felix3} />
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["title-container"]}>
          <h1>Insert title of article here</h1>
          <p>Written by: Anthony Mac</p>
          <p>March 27, 2024</p>
        </div>
        <div className={styles["article-text"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eveniet facilis quam in delectus blanditiis eligendi ratione,
            placeat ipsam eius similique doloremque minus iure ullam maiores!
            Quos amet fugit distinctio?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Facere ad assumenda rem eum facilis dolorem
            reprehenderit fugiat laudantium beatae deleniti repellat aut
            eveniet, ipsum nemo! Animi placeat nesciunt rem labore! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Minima velit assumenda
            repellat ad vero obcaecati labore voluptatem accusantium praesentium
            dolores suscipit asperiores doloremque inventore debitis magnam, ex
            officia, laudantium illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eveniet facilis quam in delectus blanditiis eligendi ratione,
            placeat ipsam eius similique doloremque minus iure ullam maiores!
            Quos amet fugit distinctio?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Facere ad assumenda rem eum facilis dolorem
            reprehenderit fugiat laudantium beatae deleniti repellat aut
            eveniet, ipsum nemo! Animi placeat nesciunt rem labore! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Minima velit assumenda
            repellat ad vero obcaecati labore voluptatem accusantium praesentium
            dolores suscipit asperiores doloremque inventore debitis magnam, ex
            officia, laudantium illo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis quo cumque ex excepturi commodi aliquam
            ipsum, consequuntur, rem aperiam sit fugit, alias harum eveniet?
            Odio sed magnam odit facilis molestias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque quo rerum ducimus? Illum ducimus
            velit sint distinctio ut et ullam dolor odit veritatis culpa ea id
            sunt dolores, quisquam perspiciatis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            eveniet facilis quam in delectus blanditiis eligendi ratione,
            placeat ipsam eius similique doloremque minus iure ullam maiores!
            Quos amet fugit distinctio?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Facere ad assumenda rem eum facilis dolorem
            reprehenderit fugiat laudantium beatae deleniti repellat aut
            eveniet, ipsum nemo! Animi placeat nesciunt rem labore! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Minima velit assumenda
            repellat ad vero obcaecati labore voluptatem accusantium praesentium
            dolores suscipit asperiores doloremque inventore debitis magnam, ex
            officia, laudantium illo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis quo cumque ex excepturi commodi aliquam
            ipsum, consequuntur, rem aperiam sit fugit, alias harum eveniet?
            Odio sed magnam odit facilis molestias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque quo rerum ducimus? Illum ducimus
            velit sint distinctio ut et ullam dolor odit veritatis culpa ea id
            sunt dolores, quisquam perspiciatis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogArticleContainer;
