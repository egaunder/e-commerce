import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}
export default function PriceTag(props: PriceTagProps) {
  return (
    <span className={`badge ${props.className}`}>
      {formatPrice(props.price)}
    </span>
  );
}
