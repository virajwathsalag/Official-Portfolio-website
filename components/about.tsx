import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

        <Card className="mb-8">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              As a passionate and driven Software Engineering undergraduate at the National Institute of Business
              Management, I am excited to contribute my skills and grow within a supportive, dynamic, and collaborative
              work environment. Eager to apply what I have learned, I look forward to engaging in opportunities that
              will help me further develop my expertise and make meaningful contributions.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
