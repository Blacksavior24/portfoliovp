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
  title: "Política de Privacidad | Villatec",
  description:
    "Política de privacidad aplicable a las aplicaciones móviles publicadas bajo el identificador com.villatec.",
}

export default function PoliticasPage() {
  return (
    <main className="min-h-screen bg-curves-hero">
      <div className="bg-curves-pattern">
        <PrivacyHeader />

        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Título principal */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Última actualización: Julio 2026
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                Política de Privacidad
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestras
                aplicaciones móviles o servicios asociados.
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
                  <p className="text-slate-400 leading-relaxed mb-3">
                    Villatec (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la empresa&quot;) se compromete a proteger tu privacidad.
                    Esta política de privacidad aplica a todas las aplicaciones móviles desarrolladas y publicadas por
                    Villatec cuyo identificador de paquete (package name) comience con{" "}
                    <strong className="text-slate-300">com.villatec.</strong>, así como a sitios web, servicios o
                    herramientas asociados a dichas aplicaciones.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Esta política es genérica y no depende del nombre comercial de cada aplicación. Al instalar o
                    utilizar cualquiera de nuestras aplicaciones, aceptas la recopilación y uso de información de
                    acuerdo con esta política.
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
                        Dependiendo de la aplicación y de los permisos que concedas, podemos recopilar los siguientes
                        tipos de información:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong className="text-slate-300">Datos de identificación personal:</strong> Nombre,
                          dirección de correo electrónico, número de teléfono u otros datos que nos proporciones
                          voluntariamente (por ejemplo, al contactarnos o crear una cuenta).
                        </li>
                        <li>
                          <strong className="text-slate-300">Datos de uso:</strong> Cómo interactúas con la aplicación,
                          pantallas visitadas, tiempo de uso, acciones realizadas y métricas de rendimiento.
                        </li>
                        <li>
                          <strong className="text-slate-300">Datos técnicos del dispositivo:</strong> Modelo de
                          dispositivo, sistema operativo, versión de la app, identificadores de publicidad o de
                          instalación, idioma, zona horaria y dirección IP.
                        </li>
                        <li>
                          <strong className="text-slate-300">Datos de diagnóstico:</strong> Informes de fallos, registros
                          de error y datos de estabilidad, cuando estén habilitados.
                        </li>
                        <li>
                          <strong className="text-slate-300">Datos de localización:</strong> Solo si otorgas permiso
                          explícito y la funcionalidad de la aplicación lo requiere.
                        </li>
                        <li>
                          <strong className="text-slate-300">Datos almacenados en el dispositivo:</strong> Información
                          que la aplicación guarde localmente para su funcionamiento (preferencias, caché o contenido
                          generado por el usuario), según corresponda.
                        </li>
                      </ul>
                      <p>
                        No todas las aplicaciones recopilan todos estos datos. Solo se solicitan los permisos y datos
                        necesarios para las funciones que ofrezca cada aplicación.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="uso-datos" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      3. Uso de la Información
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>Utilizamos la información recopilada para los siguientes propósitos:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Proporcionar, mantener y mejorar nuestras aplicaciones y servicios</li>
                        <li>Personalizar la experiencia y el contenido dentro de la aplicación</li>
                        <li>Enviar comunicaciones técnicas, actualizaciones y soporte</li>
                        <li>Analizar tendencias de uso para optimizar el rendimiento y la estabilidad</li>
                        <li>Detectar, prevenir y responder a fraudes, abusos o fallos de seguridad</li>
                        <li>Cumplir con obligaciones legales y requisitos de las plataformas de distribución (como Google Play)</li>
                        <li>Desarrollar nuevas funcionalidades y mejoras</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="almacenamiento" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      4. Almacenamiento y Seguridad
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Implementamos medidas de seguridad técnicas y organizativas razonables para proteger tus datos:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong className="text-slate-300">Cifrado:</strong> Datos sensibles protegidos en tránsito
                          (SSL/TLS) y, cuando aplique, en reposo.
                        </li>
                        <li>
                          <strong className="text-slate-300">Control de acceso:</strong> Acceso restringido solo a
                          personal autorizado.
                        </li>
                        <li>
                          <strong className="text-slate-300">Auditorías:</strong> Revisiones periódicas de seguridad.
                        </li>
                        <li>
                          <strong className="text-slate-300">Monitoreo:</strong> Controles orientados a detectar usos
                          indebidos o incidentes.
                        </li>
                      </ul>
                      <p>
                        A pesar de nuestros esfuerzos, ningún método de transmisión o almacenamiento electrónico es
                        100% seguro. No podemos garantizar la seguridad absoluta de tus datos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="permisos" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      5. Permisos del Dispositivo
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Nuestras aplicaciones pueden solicitar permisos del sistema operativo (por ejemplo, cámara,
                        micrófono, almacenamiento, notificaciones o ubicación) únicamente para habilitar funciones
                        específicas. Puedes denegar o revocar estos permisos en cualquier momento desde la
                        configuración de tu dispositivo; algunas funciones podrían dejar de estar disponibles.
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
                        <li>
                          <strong className="text-slate-300">Proveedores de servicios:</strong> Empresas que nos ayudan a
                          operar (hosting, analítica, reportes de fallos, notificaciones push, publicidad o
                          autenticación), cuando la aplicación lo utilice.
                        </li>
                        <li>
                          <strong className="text-slate-300">Plataformas de distribución:</strong> Google Play y otros
                          servicios de Google necesarios para publicar, actualizar y analizar el uso de las
                          aplicaciones.
                        </li>
                        <li>
                          <strong className="text-slate-300">Autoridades legales:</strong> Cuando sea requerido por ley o
                          para proteger derechos, seguridad o integridad de usuarios y de la empresa.
                        </li>
                        <li>
                          <strong className="text-slate-300">Reorganización empresarial:</strong> En caso de fusión,
                          adquisición o venta de activos.
                        </li>
                      </ul>
                      <p>
                        Los terceros que procesen datos en nuestro nombre están obligados a proteger la información y
                        usarla solo para los fines autorizados.
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
                        <li>
                          <strong className="text-slate-300">Acceso:</strong> Solicitar una copia de los datos que
                          poseemos sobre ti.
                        </li>
                        <li>
                          <strong className="text-slate-300">Rectificación:</strong> Corregir datos inexactos o
                          incompletos.
                        </li>
                        <li>
                          <strong className="text-slate-300">Eliminación:</strong> Solicitar la eliminación de tus datos
                          personales.
                        </li>
                        <li>
                          <strong className="text-slate-300">Portabilidad:</strong> Recibir tus datos en formato
                          estructurado, cuando aplique.
                        </li>
                        <li>
                          <strong className="text-slate-300">Oposición:</strong> Oponerte al procesamiento de tus datos.
                        </li>
                        <li>
                          <strong className="text-slate-300">Restricción:</strong> Limitar cómo usamos tus datos.
                        </li>
                        <li>
                          <strong className="text-slate-300">Retirar consentimiento:</strong> En cualquier momento para
                          tratamientos basados en consentimiento, incluyendo permisos del dispositivo.
                        </li>
                      </ul>
                      <p>
                        Para ejercer estos derechos, contáctanos mediante el correo indicado al final de esta política.
                        También puedes desinstalar la aplicación en cualquier momento; ello detendrá la recopilación
                        futura de datos desde ese dispositivo, sin perjuicio de la retención legal de datos ya
                        recopilados.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="retencion" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      8. Retención de Datos
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Conservamos tu información solo durante el tiempo necesario para cumplir con los propósitos
                        descritos en esta política, incluyendo:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Mientras uses la aplicación o mantengas una cuenta activa</li>
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
                        Nuestras aplicaciones no están dirigidas a menores de 13 años (o la edad mínima aplicable en tu
                        jurisdicción, como 16 años en algunos países de la UE), salvo que una aplicación concreta se
                        declare expresamente de otro modo en su ficha de tienda. No recopilamos conscientemente
                        información personal de menores. Si descubrimos que hemos recopilado datos de un menor sin el
                        consentimiento parental adecuado, tomaremos medidas para eliminar dicha información.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transferencias" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      10. Transferencias Internacionales
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Tus datos pueden ser transferidos y procesados en países distintos al tuyo, incluyendo
                        servidores de proveedores de nube o de servicios de Google. Nos aseguramos de que dichas
                        transferencias cumplan con las leyes aplicables, utilizando cláusulas contractuales estándar u
                        otros mecanismos de protección cuando sea necesario.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cambios" className="border-purple-500/20">
                    <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                      11. Cambios en esta Política
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 space-y-4">
                      <p>
                        Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios
                        significativos publicando la nueva política en esta página y actualizando la fecha de &quot;Última
                        actualización&quot;. Te recomendamos revisar esta política regularmente. El uso continuado de
                        nuestras aplicaciones después de los cambios constituye la aceptación de la política
                        modificada.
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
                    Si tienes preguntas, inquietudes o solicitudes relacionadas con esta política de privacidad o el
                    tratamiento de tus datos personales, puedes contactarnos:
                  </p>
                  <div className="flex flex-col gap-2 text-slate-300">
                    <p>
                      <strong>Responsable del tratamiento:</strong> Villatec
                    </p>
                    <p>
                      <strong>Alcance de aplicaciones:</strong> Package name{" "}
                      <span className="text-purple-300">com.villatec.*</span>
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:adem.villatec@gmail.com"
                        className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
                      >
                        adem.villatec@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Nos comprometemos a responder a tus solicitudes en un plazo razonable y de acuerdo con las leyes
                      aplicables.
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
                      Esta política está diseñada para cumplir los requisitos de transparencia de Google Play y
                      alinearse con principios del GDPR, CCPA y otras regulaciones aplicables. Puedes usar esta misma
                      URL como política de privacidad para cualquier aplicación publicada bajo el identificador{" "}
                      <span className="text-slate-300">com.villatec.</span> Tu privacidad es nuestra prioridad.
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
