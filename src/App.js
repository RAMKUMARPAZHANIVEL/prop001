
import Color from './components/home';
function App() {
  const colors =["black","silver","grey","maroon","red","purple","fuchsia","green","lime","olive","yellow"];
  const codes =["#000000","#C0C0C0","#808080","#800000","#FF0000","#800080","	#FF00FF","	#FF00FF","#00FF00","#808000","#FFFF00"];


  return (
    <main >
      <h2>color pallete</h2>
      <Color colors={colors} codes={codes}/>
    </main>
  );
}

export default App;
