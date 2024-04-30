//Write a function named guardrail that will accept one argument mathFunction (Function).
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (errors) {
    queue.push(errors.toString());
  } finally {
    queue.push("Guardrail was processed");
  }
  return queue;
}
