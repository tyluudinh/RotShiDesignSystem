import { AtomBox, AtomBoxProps } from "@rotshi/ui";

export const Row = ({
 width = "100%",
 alignItems = "center",
 justifyContent = "flex-start",
 padding = "0px",
 ...props
}: AtomBoxProps) => (
 <AtomBox
  display="flex"
  width={width}
  alignItems={alignItems}
  justifyContent={justifyContent}
  padding={padding}
  {...props}
 />
);

export const AutoRow = (props: AtomBoxProps) => <Row flexWrap="nowrap" {...props} />

export const RowFixed = (props: AtomBoxProps) => <Row flexWrap="wrap" width="fit-content" {...props} />

export const RowBetween = (props: AtomBoxProps) => <Row flexWrap="wrap" justifyContent="space-between" {...props} />
