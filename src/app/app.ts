import { Component, HostListener, signal } from '@angular/core';

interface GalleryImage { src: string; alt: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly whatsappUrl = 'https://wa.me/5511948348038?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';
  readonly currentYear = new Date().getFullYear();
  readonly menuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly activeTestimonial = signal(0);
  readonly openFaq = signal(-1);
  readonly selectedImage = signal<GalleryImage | null>(null);
  readonly procedures = [
    {
      title: 'Lentes de Resina',
      description: 'Mais harmonia e brilho para o seu sorriso, com resultado rápido e personalizado.',
      image: '/img-resina.jpg'
    },
    {
      title: 'Lentes de Porcelana',
      description: 'A sofisticação de um sorriso planejado para durar, com translucidez natural.',
      image: '/img-porcelana.jpg'
    },
    {
      title: 'Harmonização Facial',
      description: 'Equilíbrio e rejuvenescimento respeitando os seus traços e a sua identidade.',
      image: '/img-hamonizacao.jpg'
    }
  ];
  readonly gallery: GalleryImage[] = [
    { src: '/sorriso-ref1.jpg', alt: 'Resultado odontológico, referência 1' },
    { src: '/sorriso-ref2.jpg', alt: 'Resultado odontológico, referência 2' },
    { src: '/sorriso-ref3.jpg', alt: 'Resultado odontológico, referência 3' },
    { src: '/sorriso-ref4.jpg', alt: 'Resultado odontológico, referência 4' },
    { src: '/sorriso-ref5.jpg', alt: 'Resultado odontológico, referência 5' }
  ];
  readonly testimonials = [
    {
      quote: 'Eu queria me sentir mais segura ao sorrir, mas tinha medo de ficar artificial. O resultado foi exatamente o que eu sonhava: continuo sendo eu, só que mais confiante.',
      name: 'Mariana S.',
      initials: 'MS',
      detail: 'Lentes de porcelana',
      image: '/comentario-01.png'
    },
    {
      quote: 'Desde a primeira consulta fui acolhida e ouvi cada detalhe do meu desejo. A Dra. Alessandra tem um olhar muito delicado e cuidadoso.',
      name: 'Camila R.',
      initials: 'CR',
      detail: 'Lentes de resina',
      image: '/comentario-02.png'
    },
    {
      quote: 'O planejamento foi muito claro e o resultado superou minhas expectativas. Hoje sorrio em todas as fotos sem pensar duas vezes.',
      name: 'Eduardo M.',
      initials: 'EM',
      detail: 'Harmonização facial',
      image: '/comentario-03.png'
    },
    {
      quote: 'Fui muito bem acolhida e o processo foi extremamente transparente. O resultado ficou delicado, natural e muito elegante.',
      name: 'Beatriz L.',
      initials: 'BL',
      detail: 'Harmonização e clareamento',
      image: '/comentario-04.png'
    }
  ];
  constructor() {
    setInterval(() => {
      this.activeTestimonial.update(index => (index + 1) % this.testimonials.length);
    }, 3000);
  }

  readonly benefits = [
    { title: 'Atendimento humanizado', text: 'Você é ouvido, respeitado e cuidado em cada etapa.', icon: '♡' },
    { title: 'Resultados naturais', text: 'A melhor versão de você, sem excessos ou padrões.', icon: '✧' },
    { title: 'Planejamento personalizado', text: 'Cada detalhe pensado para a sua história e seus objetivos.', icon: '◌' },
    { title: 'Tecnologia avançada', text: 'Precisão e previsibilidade para decisões mais seguras.', icon: '⌁' },
    { title: 'Segurança', text: 'Protocolos rigorosos e materiais de excelência.', icon: '◇' },
    { title: 'Conforto', text: 'Um espaço tranquilo para você se sentir em casa.', icon: '☼' }
  ];
  readonly faqs = [
    { question: 'Como funciona a primeira avaliação?', answer: 'É uma conversa cuidadosa para entender seus desejos, avaliar sua saúde bucal e construir um plano possível, seguro e personalizado para você.' },
    { question: 'As lentes de resina ficam naturais?', answer: 'Sim. A técnica, a seleção de cor e o planejamento são feitos para respeitar seus traços e criar um resultado harmônico e natural.' },
    { question: 'Quanto tempo dura o tratamento?', answer: 'O tempo varia conforme o procedimento e o seu planejamento. Na avaliação, explicamos cada etapa e prazo com total transparência.' },
    { question: 'A harmonização facial é indicada para mim?', answer: 'A indicação depende de uma avaliação individual. O objetivo é equilibrar e valorizar seus traços, nunca padronizar rostos.' }
  ];

  @HostListener('window:scroll') onScroll(): void { this.isScrolled.set(window.scrollY > 24); }
  nextTestimonial(): void { this.activeTestimonial.update(index => (index + 1) % this.testimonials.length); }
  previousTestimonial(): void { this.activeTestimonial.update(index => (index - 1 + this.testimonials.length) % this.testimonials.length); }
}
