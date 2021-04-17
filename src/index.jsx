import ForgeUI, { render, Fragment, Text, Link, Macro, useProductContext, useConfig, MacroConfig, TextField, Image, SectionMessage, Select, Option } from "@forge/ui";

const App = () => {
  const context = useProductContext();
  const config = useConfig() || {};
  config.imageSize = config.imageSize || 'xlarge';
  if (config && config.imageSrc && config.imageSrc.length > 0) {
    return (
      <Fragment>
        <Text>&nbsp;&nbsp;</Text>
        <Image src={config.imageSrc} size={config.imageSize}/>
      </Fragment>
    );
  }

  return (
    <Fragment>
    <Text>&nbsp;&nbsp;</Text>
    <SectionMessage title="You need to configure this Image macro" appearance="warning">
      <Text>This macro has no image source set. While editing the page, select the macro, and click on the pencil icon to display configuration options.</Text>
      <Text>Hint: a Google Drawing can be web shared as an image and be displayed using this macro.</Text>
    </SectionMessage>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);

const Config = () => {
  return (
    <MacroConfig>
      {/* Form components */}
      <TextField name="imageSrc" label="Image URL" />
      <Select label="Size" name="imageSize" defaultSelecte="xlarge">
           <Option label="Extra Small" value="xsmall" />
           <Option label="Small" value="small" />
           <Option label="Medium" value="medium" />
           <Option label="Large" value="large" />
           <Option label="Extra Large" value="xlarge" />
      </Select>
    </MacroConfig>
  );
};

export const config = render(<Config />);
