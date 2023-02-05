import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <div className="p-4">
      <p className="text-displayOne">Display 1</p>
      <p className="text-displayTwo">Display 2</p>
      <p className="text-headingOne">Heading 1</p>
      <p className="text-headingTwo">Heading 2</p>
      <p className="text-headingThree">Heading 3</p>
      <p className="text-headingFour">Heading 4</p>
      <p className="text-bodyLargeBold">body large bold</p>
      <p className="text-bodyLargeRegular">body large regular</p>
      <p className="text-bodyMediumBold">body medium bold</p>
      <p className="text-bodyMediumRegular">body medium regular</p>
      <p className="text-bodySmallBold">body small bold</p>
      <p className="text-bodySmallRegular">body small regular</p>
      <Button variant="primary">Hello World</Button>

      <Button variant="outline" type="submit">
        Hello World
      </Button>
    </div>
  )
}
