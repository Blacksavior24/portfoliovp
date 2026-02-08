import type { Metadata } from "next"
import PrivacyHeader from "@/components/privacy-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Emerson Villata",
  description: "Política de privacidad y tratamiento de datos personales",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-curves-hero">
      <div className="bg-curves-pattern">
        <PrivacyHeader />

        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Título principal */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Última actualización: Febrero 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                Política de Privacidad
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación o servicios.
              </p>
            </div>

            {/* Card principal de políticas */}
            <Card className="curves-card border-purple-500/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-8 w-8 text-purple-400" />
                  <div>
                    <CardTitle className="text-2xl text-slate-100">
                      Términos y Condiciones de Privacidad
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      Lee atentamente nuestra política para entender cómo manejamos tus datos
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Introducción */}
                <section>
                  <h2 className="text-xl font-semibold text-slate-200 mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    1. Introducción y Alcance
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Nos comprometemos a proteger tu privacidad. Esta política de privacidad aplica a toda la información que recopilamos a través de nuestra aplicación web, sitios web relacionados y cualquier servicio o herramienta asociada. Al utilizar nuestros servicios, aceptas la recopilación y uso de información de acuerdo con esta política.
                  </p>
                </section>

                <Separator className="bg-purple-500/20" />

                {/* Accordion con secciones detalladas */}
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="datos-recopilados" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      2. Información que Recopilamos
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Recopilamos varios tipos de información para proporcionar y mejorar nuestros servicios:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-slate-300">Datos de identificación personal:</strong> Nombre, dirección de correo electrónico, número de teléfono cuando nos los proporcionas voluntariamente.</li>
                        <li><strong className="text-slate-300">Datos de uso:</strong> Cómo interactúas con nuestra aplicación, páginas visitadas, tiempo de permanencia, y acciones realizadas.</li>
                        <li><strong className="text-slate-300">Datos técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo, identificadores de dispositivo.</li>
                        <li><strong className="text-slate-300">Cookies y datos similares:</strong> Información almacenada en tu dispositivo para mejorar la experiencia.</li>
                        <li><strong className="text-slate-300">Datos de localización:</strong> Solo si otorgas permiso explícito para funcionalidades que lo requieran.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="uso-datos" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      3. Uso de la Información
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                        <li>Personalizar tu experiencia y contenido</li>
                        <li>Enviar comunicaciones técnicas, actualizaciones y soporte</li>
                        <li>Analizar tendencias y uso para optimizar la aplicación</li>
                        <li>Detectar, prevenir y responder a fraudes o abusos</li>
                        <li>Cumplir con obligaciones legales y regulatorias</li>
                        <li>Desarrollar nuevos productos y funcionalidades</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="almacenamiento" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      4. Almacenamiento y Seguridad
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-slate-300">Cifrado:</strong> Datos sensibles cifrados en tránsito (SSL/TLS) y en reposo.</li>
                        <li><strong className="text-slate-300">Control de acceso:</strong> Acceso restringido solo a personal autorizado.</li>
                        <li><strong className="text-slate-300">Auditorías:</strong> Revisiones periódicas de seguridad.</li>
                        <li><strong className="text-slate-300">Monitoreo:</strong> Sistemas de detección de intrusiones.</li>
                      </ul>
                      <p>
                        A pesar de nuestros esfuerzos, ningún método de transmisión por Internet es 100% seguro. No podemos garantizar la seguridad absoluta de tus datos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cookies" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      5. Cookies y Tecnologías Similares
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Utilizamos cookies, web beacons y tecnologías similares para:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-slate-300">Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la aplicación.</li>
                        <li><strong className="text-slate-300">Cookies de rendimiento:</strong> Ayudan a entender cómo los usuarios interactúan con el sitio.</li>
                        <li><strong className="text-slate-300">Cookies de funcionalidad:</strong> Recuerdan preferencias y configuraciones.</li>
                        <li><strong className="text-slate-300">Cookies analíticas:</strong> Recopilan información agregada sobre el uso.</li>
                      </ul>
                      <p>
                        Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de ciertos servicios.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="terceros" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      6. Compartir Información con Terceros
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>No vendemos tu información personal. Podemos compartir datos con:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-slate-300">Proveedores de servicios:</strong> Empresas que nos ayudan a operar (hosting, analytics, email).</li>
                        <li><strong className="text-slate-300">Socios comerciales:</strong> Solo con tu consentimiento explícito.</li>
                        <li><strong className="text-slate-300">Autoridades legales:</strong> Cuando sea requerido por ley o para proteger derechos.</li>
                        <li><strong className="text-slate-300">Reorganización empresarial:</strong> En caso de fusión, adquisición o venta de activos.</li>
                      </ul>
                      <p>
                        Todos los terceros están obligados contractualmente a proteger tu información y usarla solo para los fines especificados.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="derechos" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      7. Tus Derechos y Opciones
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>Según tu ubicación, puedes tener los siguientes derechos:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-slate-300">Acceso:</strong> Solicitar una copia de los datos que poseemos sobre ti.</li>
                        <li><strong className="text-slate-300">Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                        <li><strong className="text-slate-300">Eliminación:</strong> Solicitar la eliminación de tus datos personales.</li>
                        <li><strong className="text-slate-300">Portabilidad:</strong> Recibir tus datos en formato estructurado.</li>
                        <li><strong className="text-slate-300">Oposición:</strong> Oponerte al procesamiento de tus datos.</li>
                        <li><strong className="text-slate-300">Restricción:</strong> Limitar cómo usamos tus datos.</li>
                        <li><strong className="text-slate-300">Retirar consentimiento:</strong> En cualquier momento para datos basados en consentimiento.</li>
                      </ul>
                      <p>
                        Para ejercer estos derechos, contáctanos mediante el correo indicado al final de esta política. También tienes derecho a presentar una queja ante la autoridad de protección de datos de tu país.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="retencion" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      8. Retención de Datos
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Conservamos tu información solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, incluyendo:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Mientras mantengas una cuenta activa</li>
                        <li>Según lo requieran obligaciones legales, fiscales o regulatorias</li>
                        <li>Para resolver disputas y hacer cumplir nuestros acuerdos</li>
                        <li>Periodos específicos según el tipo de dato y finalidad</li>
                      </ul>
                      <p>
                        Una vez que ya no sea necesario, eliminaremos o anonimizaremos tus datos de forma segura.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="menores" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      9. Privacidad de Menores
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Nuestros servicios no están dirigidos a menores de 16 años (o la edad de consentimiento aplicable en tu jurisdicción). No recopilamos conscientemente información personal de menores. Si descubrimos que hemos recopilado datos de un menor sin el consentimiento parental adecuado, tomaremos medidas para eliminar dicha información.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transferencias" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      10. Transferencias Internacionales
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Tus datos pueden ser transferidos y procesados en países distintos al tuyo. Nos aseguramos de que dichas transferencias cumplan con las leyes aplicables, utilizando cláusulas contractuales estándar u otros mecanismos de protección aprobados cuando sea necesario.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cambios" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      11. Cambios en esta Política
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de &quot;Última actualización&quot;. Te recomendamos revisar esta política regularmente. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de la política modificada.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Separator className="bg-purple-500/20" />

                {/* Contacto */}
                <section className="pt-4">
                  <h2 className="text-xl font-semibold text-slate-200 mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-400" />
                    12. Contacto
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Si tienes preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el tratamiento de tus datos personales, puedes contactarnos:
                  </p>
                  <div className="flex flex-col gap-2 text-slate-300">
                    <p><strong>Responsable del tratamiento:</strong> Emerson Edward Villata Quispe</p>
                    <p><strong>Email:</strong> emersonevillataq@gmail.com</p>
                    <p className="text-sm text-slate-500 mt-2">
                      Nos comprometemos a responder a tus solicitudes en un plazo razonable y de acuerdo con las leyes aplicables.
                    </p>
                  </div>
                </section>
              </CardContent>
            </Card>

            {/* Nota final */}
            <Card className="mt-8 border-purple-500/10 bg-slate-900/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Lock className="h-6 w-6 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Esta política cumple con los requisitos del Reglamento General de Protección de Datos (GDPR) de la UE, la Ley de Privacidad del Consumidor de California (CCPA) y otras regulaciones aplicables. Tu privacidad es nuestra prioridad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
