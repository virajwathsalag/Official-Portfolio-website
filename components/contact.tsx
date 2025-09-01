import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:virajwgunasinghe@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    virajwgunasinghe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+94760193094" className="text-muted-foreground hover:text-primary transition-colors">
                    +94 76 0193 094
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">204, Kanduboda, Pilessa, Sri Lanka</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss projects, opportunities, or just connect!
              </p>

              <div className="flex space-x-4">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://github.com/virajwathsalag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>

                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.linkedin.com/in/viraj-gunasinghe-56562031a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>

              <Button asChild className="w-full">
                <a href="mailto:virajwgunasinghe@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Reference Available</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Mr. T.B.R Ekanayake</strong>
                <br />
                Senior Lead Software Engineer
                <br />
                Japan Broadcast Solutions Inc.
                <br />
                Phone: +94 71 320 9116
                <br />
                Email: tbrekanayake@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
