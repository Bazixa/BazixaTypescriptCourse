// Sometimes we receive a value from an external source.
// For example, it may come from an API, user input, or another library.
// In these cases, we don't know what type the value will have.

// That's why we use `unknown`.

// Unlike `any`, an `unknown` value cannot be used directly.
// We must first narrow its type by performing runtime checks.

function process(val: unknown) {
    if (
        // in this control we re saying the type will be object | array | null
        typeof val === "object" &&
        // in this control for the old js version the null type is a object so we re saying it cant be null and we have only object | array
        val !== null &&
        // in this control we re looking for in this object or array is contains log property or not if is have log property it will be true 
        "log" in val &&
        // and this time we re looking for the this log property is function or not if it function it will be true and the code base will be execute
        typeof val.log === "function"
    ) {
        // code base
        val.log();

        // Here TypeScript knows that `val`
        // has a callable `log()` method.

        // More code...
    }
}