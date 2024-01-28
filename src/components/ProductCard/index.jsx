import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "../../components/ui/button"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function ProductCard(props) {

  return (
    <Card className="w-[45vw] m-1">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <img src={props.photo_url} alt="Foto do produto" />
        <CardDescription>{'Preço: R$ ' + props.sale_price.toFixed(2)}</CardDescription>
        <CardDescription>{'Quantidade: ' + props.quantity}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default ProductCard;