// DUPLICATES src/modbus-http/errors.ts.  Currently we can't import that package
// from node in current file structure because dependencies don't resolve.

const error_class = (name, description) => ({
    name,
    http_status: 400,
    description,
  });
  
  export const ERROR_CLASSES = {
    1: error_class(
      "MODBUS_EXC_ILLEGAL_FN",
      `Modbus “illegal function” (e.g., a writereg issued against a read-only register)`
    ),
    2: error_class(
      "MODBUS_EXC_ILLEGAL_DADDR",
      `Modbus “illegal data address” (e.g., a writereg issued against an address that isn’t used)`
    ),
    3: error_class(
      "MODBUS_EXC_ILLEGAL_DVALUE",
      `Modbus “illegal data value” (e.g., a writereg issued with a value that’s out of bounds for that register)`
    ),
    4: error_class(
      "MODBUS_EXC_SLAVE_FAIL",
      `Modbus “slave failure”; should never happen in current products but included here for completeness against the Modbus spec`
    ),
    10: error_class("OVERFLOW", `CSV entry too long for our buffer`),
    11: error_class(
      "MISSING_EQUALSIGN",
      `Missing expected equal sign field separator.`
    ),
    12: error_class(
      "BAD_ADDRESS_FORMAT",
      `Bad Modbus PDU address format (not 0xNNNN).`
    ),
    13: error_class(
      "BAD_ADDRESS_CHARS",
      `Illegal characters in the address field (e.g., 0x123z).`
    ),
    14: error_class(
      "ADDRESS_OUT_OF_RANGE",
      `Address field isn’t within the legal Modbus register address range (0 to 0xFFFF, inclusive).`
    ),
    15: error_class(
      "BAD_FLOAT_FORMAT",
      `Float parsing triggered but illegal characters in the value field (e.g., “z.”).`
    ),
    16: error_class(
      "BAD_FLOAT_CHARS",
      `Float parsing triggered but illegal characters after an apparently-valid value (e.g. “0.1z”).`
    ),
    17: error_class(
      "BAD_INT_FORMAT",
      `Float parsing triggered but illegal characters in the value field (e.g., “z.”).`
    ),
    18: error_class(
      "BAD_INT_CHARS",
      `Float parsing triggered but illegal characters after an apparently-valid value (e.g. “0.1z”).`
    ),
    19: error_class(
      "BAD_UINT_FORMAT",
      `Float parsing triggered but illegal characters in the value field (e.g., “z.”).`
    ),
    20: error_class(
      "BAD_UINT_CHARS",
      `Float parsing triggered but illegal characters after an apparently-valid value (e.g. “0.1z”).`
    ),
    21: error_class(
      "TOO_MANY_ENTRIES",
      `Too many addr or addr=value entries for our work queue.`
    ),
  };
  