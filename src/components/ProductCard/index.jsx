import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

function ProductCardInTransit(props) {

  return (
    props.prod_requests?.map((item) => {
      return (
        <Card className="w-[45vw] m-1 lg:w-2/12 md:w-2/12 lg:h-[400px]">
          <CardHeader>
            <CardTitle>{item.products.name}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <img className="rounded-2xl w-11/12" src={item.products.photo_url} alt="Foto do produto" />
            <CardDescription>{'Preço: R$ ' + item.products.sale_price.toFixed(2)}</CardDescription>
            <CardDescription>{'Quantidade: ' + item.quantity}</CardDescription>
          </CardContent>
        </Card>

      )
    })
  );
}


function ProductCard(props) {

  return (
    <Card className="w-[45vw] m-1 lg:w-2/12 lg:h-[400px]">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <img src={props.photo_url} className="rounded-2xl w-11/12" alt="Foto do produto" />
        <CardDescription>{'Preço: R$ ' + props.sale_price.toFixed(2)}</CardDescription>
        <CardDescription>{'Quantidade: ' + props.quantity}</CardDescription>
      </CardContent>
    </Card>
  );
}

export { ProductCard, ProductCardInTransit };