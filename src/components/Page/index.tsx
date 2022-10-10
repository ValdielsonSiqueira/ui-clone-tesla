import { DefaultOverlayContent } from '../DefaultOverlayContent.styles';
import { Container } from './styles';
import { ModelWrapper, ModelSection } from '../Model';

export function Page() {
  return (
    <Container>
      <ModelWrapper>
        <div>
         {[
            'Model One',
            'Model Two',
            'Model Tree',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
         ].map(modelName =>(
           <ModelSection 
            className="colored"
            modelName={modelName}
            overlayNode= {
              <DefaultOverlayContent
                label={modelName}
                description="Order Online Delivery"
              />
            }
          />
         ))}
        </div>
      </ModelWrapper>
    </Container>
  );
}
