import { useEffect, useState } from "react";
import { ProductCard, ProductCardInTransit } from "../../components/ProductCard";
import api from "../../services/api";
import { Skeleton } from "../../components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";


function Service() {

  const [activeProducts, setActiveProducts] = useState([])
  const [availableProducts, setAvailableProducts] = useState([])
  const [inTransitProducts, setInTransitProducts] = useState([])
  const [loading, setLoading] = useState(false)

  async function loadProducts() {
    setLoading(true)
    setActiveProducts(await api.products.GetActives())
    setAvailableProducts(await api.products.GetAvaibles())
    setInTransitProducts(await api.products.GetInTransit())
    setLoading(false)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  if (loading) {
    const i = ["1", "2", "3", "4", "5", "6", "7", "8"]


    return (
      <div div className="flex items-center justify-center">
        <Tabs defaultValue="avaibles" className="w-[85vw] mt-5 flex items-center flex-col justify-center m-0 p-0 lg:w-[35vw]">
          <TabsList defaultValue="avaibles" className="grid w-full grid-cols-3 lg:h-16">
            <TabsTrigger value="avaibles" className="lg:h-14 text-[12px] lg:text-sm">A pronta-entrega</TabsTrigger>
            <TabsTrigger value="actives" className="lg:h-14 text-[12px] lg:text-sm">Todos</TabsTrigger>
            <TabsTrigger value="intransit" className="lg:h-14 text-[12px] lg:text-sm">Irá chegar em breve</TabsTrigger>
          </TabsList>
          <TabsContent value="avaibles" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
            {
              i.map((_, i) => {
                return (
                  <Skeleton key={i} className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-[45vw] m-1">
                    <div className="flex flex-col p-6 pb-4 pt-4">
                      <Skeleton className="h-5"></Skeleton>
                    </div>
                    <div className="space-y-3 p-6 pt-0">
                      <Skeleton className="rounded-2xl w-11/12 h-24 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                    </div>
                  </Skeleton>
                )
              })
            }
          </TabsContent>
          <TabsContent value="actives" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
            {
              i.map((_, i) => {
                return (
                  <Skeleton key={i} className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-[45vw] m-1">
                    <div className="flex flex-col p-6 pb-4 pt-4">
                      <Skeleton className="h-5"></Skeleton>
                    </div>
                    <div className="space-y-3 p-6 pt-0">
                      <Skeleton className="rounded-2xl w-11/12 h-24 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                    </div>
                  </Skeleton>
                )
              })
            }
          </TabsContent>
          <TabsContent value="intransit" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
            {
              i.map((_, i) => {
                return (
                  <Skeleton key={i} className="rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 w-[45vw] m-1">
                    <div className="flex flex-col p-6 pb-4 pt-4">
                      <Skeleton className="h-5"></Skeleton>
                    </div>
                    <div className="space-y-3 p-6 pt-0">
                      <Skeleton className="rounded-2xl w-11/12 h-24 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                      <Skeleton className="rounded-2xl w-11/12 h-5 text-sm text-slate-500 dark:text-slate-400"></Skeleton>
                    </div>
                  </Skeleton>
                )
              })
            }
          </TabsContent>
        </Tabs>
      </div>
    )
  }


  return (
    <div className="flex items-center justify-center overflow-x-hidden">
      <Tabs defaultValue="avaibles" className="w-[85vw] mt-5 flex items-center flex-col justify-center m-0 p-0 lg:w-[35vw]">
        <TabsList className="grid w-full grid-cols-3 lg:h-16">
          <TabsTrigger value="avaibles" className="lg:h-14 text-[12px] lg:text-sm">A pronta-entrega</TabsTrigger>
          <TabsTrigger value="actives" className="lg:h-14 text-[12px] lg:text-sm">Todos</TabsTrigger>
          <TabsTrigger value="intransit" className="lg:h-14 text-[12px] lg:text-sm">Irá chegar em breve</TabsTrigger>
        </TabsList>
        <TabsContent value="avaibles" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
          {
            availableProducts.map((product) => {
              return (
                <ProductCard key={product.id} {...product} />
              )
            })
          }
        </TabsContent>
        <TabsContent value="actives" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
          {
            activeProducts.map((product) => {
              return (
                <ProductCard key={product.id} {...product} />
              )
            })
          }
        </TabsContent>
        <TabsContent value="intransit" className="flex flex-wrap w-screen items-center justify-center !p-0 !m-0">
          {
            inTransitProducts.map((item) => {
              return (
                <ProductCardInTransit key={item.id} {...item} />
              )
            })
          }
        </TabsContent>
      </Tabs>
    </div>

  );
}

export default Service;