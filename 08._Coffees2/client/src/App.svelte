<script>
  import { Router, Link, Route } from "svelte-navigator"
  import Home from "./pages/Home/Home.svelte"
  import CoffeeOverview from "./pages/CoffeeOverview/CoffeeOverview.svelte"
  import RegisterCoffeeLover from "./pages/RegisterCoffeeLover/RegisterCoffeeLover.svelte";
  import WhoDatCoffeeLover from "./pages/WhoDatCoffeeLover/WhoDatCoffeeLover.svelte";
  import RegisterCoffeeLoverSSR from "./pages/RegisterCoffeeLoverSSR/RegisterCoffeeLoverSSR.svelte";
  import WhoDatCoffeeLoverSSR from "./pages/WhoDatCoffeeLoverSSR/WhoDatCoffeeLoverSSR.svelte";


</script>

<Router>
  <nav>
    <Link to="/">Home |</Link>
    <Link to="/coffeetypes">Coffee overview |</Link>
    <Link to="/registercoffeelover">RegisterCoffeeLover |</Link>
    <Link to="/whodatcoffeelover">whoDatCoffeeLover</Link>
    <Link to="/registercoffeeloverssr">RegisterCoffeeLover SSR |</Link>
    <Link to="/whodatcoffeeloverssr">whoDatCoffeeLover SSR</Link>
  </nav>

  <div>
    <Route path="/"><Home /></Route>
    <Route path="/coffeetypes"><CoffeeOverview /></Route>
    <Route path="/registercoffeelover"><RegisterCoffeeLover /></Route>
    <Route path="/whodatcoffeelover"><WhoDatCoffeeLover /></Route>
    <Route path="/registercoffeeloverssr"><RegisterCoffeeLoverSSR /></Route>
    <Route path="/whodatcoffeeloverssr"><WhoDatCoffeeLoverSSR /></Route>
    
  </div>
  

</Router>