import React from "react"
import { Button } from "@/components/ui/button"
import figma from "@figma/code-connect"

figma.connect(
  Button,
  "https://www.figma.com/design/QpZsRWkCvPW1ExGbJD4rAw/-KDS--Keeper-Design-System?node-id=4050-8117&t=FS1aq0nR5I9I5KTu-4",
  {
    props: {
      variant: figma.enum("Variant", {
        "Brand Solid": "brand-solid",
        "Brand Outline": "brand-outline",
        "Neutral Solid": "neutral-solid",
        "Neutral Weak": "neutral-weak",
        "Neutral Outline": "neutral-outline",
        "Critical Solid": "critical-solid",
        "Ghost": "ghost",
      }),
      size: figma.enum("Size", {
        "Small": "small",
        "Medium": "medium",
        "Large": "large",
      }),
      iconOnly: figma.enum("Icon Only", {
        "True": true,
        "False": false,
      }),
      label: figma.string("Label"),
    },
    example: (props) => (
      <Button
        variant={props.variant}
        size={props.size}
        iconOnly={props.iconOnly}
      >
        {props.label}
      </Button>
    ),
  },
)
