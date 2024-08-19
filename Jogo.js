let vida = 100
let inventario = []
let velocidade = 10
let resistencia = 10
let fisico = 10
let experiencia = 20
let sanidade = 50
let fas = 1000
var escolha6 = null
    alert("Jogo produzido por: Arthur Maciel")
    alert("Bem Vindo a Historia de Musa Suliman")
    let escolha1 = prompt("Deseja começar (sim/não): ")
    if (escolha1 == "sim") {
        alert("Vida inicial: " + vida + "\nVelocidade: " + velocidade + "\nResistencia: " + resistencia + "\nfisico: " + fisico)
        alert("Musa fugiu do Sudão devido a conflitos e encontrou refúgio em um novo país. Aos 9 anos quando se mudou para o Cairo o jovem negro Musa Hagar Safi descubriu o atletismo")
        alert("Em 2021 Musa se mudou pra suiça como refugiado e quando se estabilizou por lá voltou a treinar sem parar")
        alert("Enquanto treinava, Musa acaba torcendo o tornozelo e terá que ficar meses em recuperação")
        alert("Saber que não vai poder fazer oque gosta te deixa extremamente frustrado e triste")
        alert("Você perdeu vida!!")
        vida -= 10
        alert("Vida atual: " + vida)
        alert("4 meses se passam e sua felicidade e vontade de treinar voltam com muita mais força e vontade de vencer")
        alert("Um certo dia de folga você decide ir para uma boate com seus amigos e lá te oferecem um tipo de planta que você nunca tinha visto")
 
        let escolha2 = prompt("Você aceita a planta ? (sim/não): ")
        if (escolha2 == "sim"){
            alert("Você fica extremamente chapado")
            alert("Você perdeu vida!!")
            vida -= 5
            alert("Vida atual: " + vida)
        }else if (escolha2 == "não"){
            alert("Você recusa a planta e continua curtindo a festa normalmente")
            alert("Você permanece com " + vida + " de vida!!")
            alert("Vida atual: " + vida)}
         let escolha3 = prompt("Você foi pra casa. Deseja dormir? (sim/não): ")
        if (escolha3 == "sim"){
                alert("Você descansou e recuperou vida!!")
                vida += 10
                alert("Vida atual: " + vida)
                alert("Os dias vão passando e as olímpiadas de 2024 estão chegando e você precisa treinar mais")
        }{
                alert("Você precisa chegar a 50 pontos em todos os atributos!!")
                alert("DICA: se você treinar seus atributos vão aumentar.")
            let escolha4 = prompt("Você deseja ir na academia? (sim/não): ")
            if (escolha4 == "sim"){
                alert("você foi na academia e fez um ótimo treino ")
                alert("Você ganhou pontos de: Fisico e resistencia!!")
                resistencia += 10
                fisico += 15
                alert("Fisico: " + fisico)
                alert("resistencia: " + resistencia)
            }
            if (escolha4 == "não"){
                alert("Você decide ficar em casa sem fazer nada")
                alert("Você perdeu vida!!")
                vida -= 5
                alert("Vida Atual: " + vida)
 
            }
                alert("Faltam apenas duas semanas paras olimpiadas de 2024 em paris!!")
                alert("Em um dos treinos você é entrevistado e te perguntam qual é a sensação de ser um prospecto olimpico ")
                alert("Você responde: Olha cara é uma sensação muito dificil de descrever em palavras. Sou um refugiado do meu país então você ver jovens negros na faixa etaria de 20 anos chegando ao nivel profissional é muito incrivel")
                alert("Você desbloqueou o sistema novo!!")
                alert("Agora você pode aumentar sua base de fãs dependendo da sua resposta em entrevistas")
                alert("Base de fãs atual: " + fas)
                alert("Entrevistador: Todos no mundo estão torcendo por você Musa!")
            let escolha5 = Number(prompt("Quais são suas expectativas para os jogos olímpicos? \n1 - Como eu disse é um lugar que eu nunca estive antes, não sei a atmosfera do país e nem sei como vai funcionar ao certo porém estou muito animado e feliz por chegar onde eu cheguei.\n2 - Estou meio desanimado e sem confiança mas acho q vai ser legal "))
            if (escolha5 == 1){
                alert("Você ganha + 1000 fãs!!")
                fas += 1000
                alert("Base de fãs atual: " + fas)
            }
            if (escolha5 == 2){
                alert("Você perdeu fãs pela sua resposta!!")
                fas -= 500
                alert("Base de fãs atual: " + fas)
 
            }
                alert("Sempre no fim dos treinos você terá a opção de ser entrevistado ou não.")
                alert("No dia após a entrevista você chega no CT de treinamento da EQUIPE DE ATLETAS REFUGIADOS e terá que decidir oque irá treinar hoje.")
           
            checkpointVida()
           
           
           
            if (escolha6 == 2){
                alert("Você decidiu treinar a sua resistencia e ganhou pontos")
                resistencia += 15
                alert("Resistencia: " + resistencia)
               
 
            }
            if (escolha6 == 3){
                alert("Você decidiu treinar a sua velocidade e ganhou pontos")
                velocidade += 20
                alert("Velocidade: " + velocidade)
            }
            let escolha7 = prompt("Você deseja ser entrevistado?? (sim/não):")
                alert("Base de fãs atual: " + fas)
            if (escolha7 == "sim" ){
            let escolha8 = Number(prompt("O mundo tem curiosidade de saber como é a convivencia dentro da equipe de refugiados, oque você tem a dizer sobre isso? \n1 - Eu tenho uma relação incrivel com todos, seja os treinadores os enfermeiros e os atletas da minha equipe. \n2 - Não ligo muito para a equipe em si, gosto de focar e trabalhar duro para a minha evolução"))
            if (escolha8 == 1){
                alert("Você ganha +1500 fãs!!")
                fas += 1500
                alert("Base de fãs atual: " + fas)
            }
            if (escolha8 == 2){
                alert("Você perdeu 500 fãs!!")
                fas -= 500
                alert("Base de fãs atual: " + fas)
            }
            }
            if (escolha7 == "não"){
                alert("Você está estressado e recusa a entrevista!")
                alert("Você xingou o entrevistador e perdeu 700 fãs! ")
                fas -= 700
                alert("Base de fãs atual: " + fas)
            }
                alert("Dias restantes para o inicio das olimpiadas: 7")
                alert("Você precisa chegar a 50 em todos atributos")
                alert("Vida atual: " + vida + "\nVelocidade: " + velocidade + "\nResistencia: " + resistencia + "\nfisico: " + fisico)
                alert("Faltando 7 dias para os jogos olimpicos você vai em um parque famoso de paris e lá você encontra um ex velocista de sucesso chamado USAIN BOLT")
                alert("Voce toma coragem e vai falar com ele e se surpreende por ele saber quem você é..")
                alert("Vocês conversam por um tempo e ele diz para se encontrarem no CT de corredores refugiados de paris.")
                alert("Você sem pensar muito vai até o local combinado e o encontra la. Vocês conversam e ele te passa diversas dicas e estrategias para ter um melhor desempenho.")
                alert("Você ganhou + 20 de experiencia")
                experiencia += 20
                alert("Experiencia: " + experiencia)
                alert("Não é necessario 50 de experiencia para chegar aos jogos olimpicos!")
                alert("Um dia passa...")
                alert("Você acorda animado para treinar hoje! Faltam apenas 6 dias para o inicio das competições.")
            let escolha9 = Number(prompt("Oque voê deseja treinar hoje? \n1 - Fisico \n2 - resistencia \n3 - velocidade \n4 - todos"))
             if (escolha9 == 1){
                    alert("Você decidiu treinar todos os atributos!")
                    velocidade += 40
                    resistencia += 40
                    fisico += 40
                    alert("Velocidade atual: " + velocidade + "\nFisico atual: " + fisico + "\nResistencia atual: " + resistencia )
            }
            if (escolha9 == 2){
                    alert("Você decidiu treinar todos os atributos")
                    velocidade += 40
                    resistencia += 40
                    fisico += 40
                    alert("Velocidade atual: " + velocidade + "\nFisico atual: " + fisico + "\nResistencia atual: " + resistencia )
            }
            if (escolha9 == 3){
                    alert("Você decidiu treinar todos os atributos!")
                    velocidade += 40
                    resistencia += 40
                    fisico += 40
                    alert("Velocidade atual: " + velocidade + "\nFisico atual: " + fisico + "\nResistencia atual: " + resistencia )
            }
            if (escolha9 == 4){
                    alert("Você treinou todos os atributos!")
                    velocidade += 40
                    resistencia += 40
                    fisico += 40
                    alert("Velocidade atual: " + velocidade + "\nFisico atual: " + fisico + "\nResistencia atual: " + resistencia )
                    alert("Parabéns!! Você está pronto para os jogos olímpicos.")
            }
                let escolha10 = prompt("Você deseja começar as olímpiadas? (sim/não) ")
            if (escolha10 == "sim"){
                    alert("Você chega para a primeira corrida de 800M no dia 08/8/2024. Você está nervoso mas se lembra das dicas que o Usain Bolt te deu e então você fica inspirado e confiante. ")
                    alert("Você começa atras mas logo no fim da corrida você ultrapassa os corredores ficando em segundo lugar sendo qualificado para as semifinais dos 800M!")
                    alert("Entrevistador: Qual a sensação de terminar a primeira corrida de 800M dos jogos olímpicos em segundo lugar?  ")
                    alert("Musa: Sinceramente é uma sensação muito incrivel e complicada de descrever em palavras, tive uma infancia muito dificil e sei q trabalhei muito duro para estar aqui hoje. Vim aqui com o objetivo de conquistar o ouro claro porém oque eu mais quero é ver minha familia feliz e com uma vida estavel longe de guerras.")
                    alert("Com muita felicidade você vai pro hotel em que os atletas da EQUIPE DE REFUGIADOS estão hospedados e quando entra no seu quarto você se depara com seu treinador e seu irmão sentados na cama esperando por você.")
                    alert("Quando você entra no quarto eles te dão uma noticia extremamente triste e pesada. Você descobre que sua mãe acabou falecendo em um acidente de carro antes da sua primeira corrida!")
                    alert("Um filme passa pela sua cabeça e a tristeza te consome por dentro e por fora. Umas das unicas pessoas que confiaram em você e ficou do seu lado em todos os seus momentos faleceu antes de ver seu sucesso.")
                    alert("Musa desaba chorando pensando em sua mãe...")
                    inventario.push("TRISTEZA, FELICIDADE, ANGUSTIA, ANSIEDADE")
                    alert("Inventario Atual: " + inventario)
                    alert("Acontecimentos desse tipo fazem com que você perca sanidade !!")
                    sanidade -= 20
                    alert("Sanidade Atual: " + sanidade)
                    alert("Alguns dias se passam e a ficha caiu...")
                    alert("Mesmo triste e mal você continua treinando.")
                    alert("Dois dias se passam e chega o grande dia das semifinais e você continua mal mas está confiante. Você treinou para estar ali e sabe oque tem que ser feito! ")
                    alert("Começa a corrida e você se mantém em primeiro lugar, porém chegando perto da linha de chegada você se lembra do acidente recente com a sua mãe e começa a se desconcentrar!!")
                    alert("As lembranças afetam seu desempenho e você acaba terminando as semifinais em terceiro lugar!")
                    alert("Entrevistador: Percebemos um desconforto e um uma desconcentração no fim da corrida, oque você tem a dizer sobre isso. Você poderia ter chegado em primeiro lugar se não fosse isso!")
                    alert("Você começa a chorar e diz: O acidente com a minha mãe a dois dias me afetou e por isso não fiz uma sessão perfeita. Sei q se minha mãe tivesse aqui para ver ela estaria orgulhosa por eu estar no pódio")
                    alert("Musa continua falando: Meu objetivo principal sempre foi dar orgulho para ela e meu pai, claro que quero o ouro mas saber que ela não verá isso acontecer me desanima um pouco. Mas sei que ela diria para eu não desistir e buscar o ouro po isso eu digo aqui nessa entrevista, esse ouro ja é meu!")
                    alert("Você chega confiante para as finais!! ")
                    alert("Você está confiante então chegando perto da linha de chegada você ultrapassa todos os corredores e termina em PRIMERIO LUGAR 🥇")
                    alert("Musa se emociona ao chegar em primeiro lugar e desaba de chorar lembrando de sua mãe...")
                    alert("Chega a hora do pódio e ficha de tudo que está acontecendo cai e você é homenageado com a tão esperada medalha de ouro...")
                    alert("🥇🥇")
            }
                    alert("Chorando você diz: Isso foi pela minha mãe! Nós conseguimos.")
                    alert("VOCÊ CONSEGUIU!! parabéns, você terminou a historia de Musa Hagar Safi.")
                    alert("Obrigado por jogar...")
                    alert("Jogo produzido por Arthur Maciel")
 
                 
        }
       
    } else if(escolha1 == "não"){
        alert("Jogo finalizado"); // finalizar o jogo retornar nada
    }
    function checkpointVida(){
       escolha6 = Number(prompt("Oque voce quer treinar e evoluir hoje? \n1 - fisico \n2 - resistencia \n3 - velocidade " ))
     if (escolha6 == 1){
            alert("Você decidiu treinar o seu fisico e acabou exagerando nos pesos e acabou sendo esmagado pelo leg press!!")
            alert("Você Morreu!! GAME OVER💀")
            alert("Pense melhor. Você terá outra chance")
            checkpointVida()
 
        }
 
     }