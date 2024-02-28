import Image from "next/image";
import styles from "./ProductDetails.module.sass";
import Button from "../Button/Button";
import { ProductDetailsProps } from "./ProductDetails.types";
import { formatCurrencyToArg } from "../../shared/utils";
// import Example from "../Example/Example";

const ProductDetails = ({ productDetails }: ProductDetailsProps) => {
  const description = productDetails.item.description.replace(/\n/g, "<br />");

  const onClickHandler = () => {
    console.log("comprou!");
  };

  return (
    <div data-testid="productDetails" className={styles.productDetails}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <Image
            className={styles.image}
            src={productDetails.item.picture}
            alt={productDetails.item.title}
            width={680}
            height={680}
            priority
            aria-hidden
          />
          <div className={styles.details}>
            <div
              data-testid={"soldQuantity"}
              className={styles.buyers}
            >{`${productDetails.item.condition} - ${productDetails.item.sold_quantity} vendidos`}</div>
            <h1 aria-hidden>{productDetails.item.title}</h1>
            <div className={styles.priceContainer}>
              <span className={styles.price}>
                $ {formatCurrencyToArg(productDetails.item.price.amount)}
              </span>
              <span
                data-testid={"decimals"}
                className={styles.decimal}
                aria-hidden
              >
                {productDetails.item.price.decimals}
              </span>
            </div>
            {/* <Example /> */}
            <Button onClick={onClickHandler}>Comprar</Button>
          </div>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.descriptionContent}>
          <div className={styles.description}>
            <h2>Descripcion del producto</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: description
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
