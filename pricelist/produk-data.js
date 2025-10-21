// =======================================================
// INI ADALAH FILE DATA PRODUK ANDA
// Edit, tambah, atau hapus produk hanya di file ini.
// "true" berarti populer, "false" berarti tidak.
// =======================================================

const dataProduk = [
  {
    nama: 'ChatGPT Plus',
    logo: '../assets/img/chatgpt.svg',
    populer: true,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 125k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 355k']
      }
    ],
    deskripsi: 'Akses model AI tercanggih dari OpenAI. Dapatkan respons lebih cepat, akses prioritas ke fitur baru seperti GPT-4o, dan kemampuan analisis data, pembuatan gambar, serta browsing internet. Sangat cocok untuk para profesional.'
  },
  {
    nama: 'Claude Pro',
    logo: '../assets/img/claude.svg',
    populer: false,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 120k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 350k']
      }
    ],
    deskripsi: 'AI dari Anthropic yang dirancang untuk tugas-tugas kompleks dan analisis dokumen panjang. Unggul dalam pemahaman konteks, ringkasan, dan penulisan kreatif dengan jendela konteks yang besar.'
  },
  {
    nama: 'Copilot Pro',
    logo: '../assets/img/copilot.svg',
    populer: false,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 115k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 345k']
      }
    ],
    deskripsi: 'Asisten AI dari Microsoft yang terintegrasi di seluruh ekosistemnya. Dapatkan akses prioritas ke model terbaru OpenAI dan integrasi canggih di aplikasi Office (Word, Excel, PowerPoint).'
  },
  {
    nama: 'Gemini Advanced',
    logo: '../assets/img/gemini.svg',
    populer: false,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 130k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 350k']
      }
    ],
    deskripsi: 'Akses ke model AI tercanggih dari Google, 1.5 Pro. Nikmati kemampuan multimodal, jendela konteks 1 juta token, dan integrasi mendalam dengan layanan Google seperti Gmail, Docs, dan Drive.'
  },
  {
    nama: 'Perplexity Pro',
    logo: '../assets/img/perplexity.svg',
    populer: false,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 110k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 340k']
      }
    ],
    deskripsi: 'Mesin penjawab bertenaga AI yang memberikan jawaban langsung dengan kutipan sumber yang akurat. Cocok untuk riset, belajar, dan menemukan informasi terverifikasi dengan cepat.'
  },
  {
    nama: 'Grok (X Premium+)',
    logo: '../assets/img/grok.svg',
    populer: false,
    harga: [
      {
        tipe: 'Sharing',
        list: ['1 Bulan : 95k']
      },
      {
        tipe: 'Private',
        list: ['1 Bulan : 275k']
      }
    ],
    deskripsi: 'AI dari xAI yang memiliki akses real-time ke informasi di platform X (Twitter). Dikenal dengan gayanya yang humoris dan sedikit memberontak, cocok untuk mendapatkan perspektif unik dan terkini.'
  }
];