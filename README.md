# Crypto_Audit
- Añadí un continue para ignorar los valores corruptos en el primer if.
- He agregado el break para salir del bucle al encontrar operaciones sospechosas por encima de 5000. 
- He creado una nueva variable "importe" que he usado para convertir el array "transaccion" a datos numéricos, sabiendo que es cadena de textos y que hay varias cadenas que darán isNAN. Para evitar esto he agregado un condicional para que cuando encuentre un datlo isNaN pase al siguiente valor, ya que los valores con datos parcialmente númericos los convierte a número sin problema. 