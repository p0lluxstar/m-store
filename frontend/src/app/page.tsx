import styles from "./page.module.css";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductList/>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
