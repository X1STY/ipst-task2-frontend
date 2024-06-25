interface FormDTO {
  title: string;
  description: string?;
  fields: FieldDTO[];
  buttons: string[];
}

interface FieldDTO {
  label: string;
  attrs: FieldAttributesDTO;
}

interface FieldAttributesDTO {
  name: string;
  type: string;
  variants?: { value: string; label: string }[];
}
