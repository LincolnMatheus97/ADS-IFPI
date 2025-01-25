package classes;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        RedeSocial antiSocialSocialClub = new RedeSocial();
        int escolha = -1;
        PerfilAtualLogado perfilAtualLogado = new PerfilAtualLogado();

        while (escolha != 0) {
            String nomePerfilLogado = perfilAtualLogado.getPerfilAtual() != null ? perfilAtualLogado.getPerfilAtual().getApelido() : "Nenhum";
            System.out.println("\n" +
                    "\t\r SEJA BEM VINDO AO ANTI SOCIAL SOCIAL CLUB" + "    Perfil logado: " + nomePerfilLogado +
                    "\n\t\r Para navegar pela rede social ASSC, escolha um dos números abaixo..." +
                    "\n\t\r Gerencia de Perfis: " +
                    "\n" +
                    "\n\t\r 1 - Adicionar Perfil            " +
                    "\n\t\r 2 - Buscar Perfil por Email      " +
                    "\n\t\r 3 - Buscar Perfil por Nome       " +
                    "\n\t\r 4 - Buscar Perfil por ID         " +
                    "\n\t\r 5 - Listar Todos os Perfis       " +
                    "\n\t\r 6 - Ativar Perfil                " +
                    "\n\t\r 7 - Desativar Perfil             " +
                    "\n\n\t\r Gerencia de Publicações: " +
                    "\n" +
                    "\n\t\r 8 - Adicionar Publicação Simples " +
                    "\n\t\r 9 - Adicionar Publicação Avançada" +
                    "\n\t\r 10 - Listar Publicaçôes          " +
                    "\n\t\r 11 - Interagir com Publicação    " +
                    "\n\n\t\r Gerencia de Amizades: " +
                    "\n" +
                    "\n\t\r 12 - Enviar Pedido de Amizade    " +
                    "\n\t\r 13 - Aceitar Pedido de Amizade   " +
                    "\n\t\r 14 - Listar Amigos               " +
                    "\n\t\r  0 - Sair                         ");
            System.out.print("\n\t\r Opcao Desejada: ");
            escolha = Integer.parseInt(scanner.nextLine());

            switch (escolha) {
                case 1:
                    adicionarPerfil(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 2:
                    buscarPerfilPorEmail(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 3:
                    buscarPerfilPorNome(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 4:
                    buscarPerfilPorId(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 5:
                    listarTodosPerfis(antiSocialSocialClub);
                    break;
                case 6:
                    ativarPerfil(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 7:
                    desativarPerfil(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 8:
                    adicionarPublicacaoSimples(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 9:
                    adicionarPublicacaoAvancada(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 10:
                    listarPublicacoes(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 11:
                    interagirComPublicacao(antiSocialSocialClub, scanner);
                    break;
                case 12:
                    enviarPedidoDeAmizade(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 13:
                    solicitacaoDeAmizade(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 14:
                    listarAmigos(antiSocialSocialClub, scanner, perfilAtualLogado);
                    break;
                case 0:
                    System.out.println("\n\t\r Obrigado por usar o Anti Social Social Club!");
                    break;
                default:
                    System.out.println("\n\t\r Opção inválida! Tente novamente...");
                    break;
            }
        }
    }

    // Metodo para determinar o emoji do perfil
    public static EmojiConverter determinarEmoji(Scanner scanner) {
        EmojiConverter emojiConverter = new EmojiConverter();
        String[] arrayDeEmoji = emojiConverter.lerEmoji();

        System.out.println("\n\t\r Escolha um emoji para o perfil: ");
        for (int i = 0; i < arrayDeEmoji.length; i++) {
            if (i > 0 && i % 10 == 0) {
                System.out.println();
            }
            System.out.printf(" %d - %s ", i + 1, arrayDeEmoji[i]);
            if (i == arrayDeEmoji.length - 1) {
                System.out.println();
            }
        }

        System.out.print(" ESCOLHA O EMOJI: ");
        int escolhaUser = scanner.nextInt();
        scanner.nextLine();
        return new EmojiConverter(arrayDeEmoji[escolhaUser - 1]);
    }

    // Metodos para adicionar os perfis e ultimo perfil adicionado ao sistema é o perfil logado
    public static void adicionarPerfil(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Digite o apelido do perfil: ");
        String apelido = scanner.nextLine();
        System.out.print("\n\t\r Digite o email do perfil: ");
        String email = scanner.nextLine();
        EmojiConverter emoji = determinarEmoji(scanner);
        Perfil perfil = new Perfil(apelido, emoji, email);
        redeSocial.adicionarPerfil(perfil);
        perfilAtualLogado.setPerfilAtual(perfil);
        System.out.println("\n\t\r Perfil adicionado com sucesso!" + " Nome: " + perfil.getApelido() + " Email: "
                + perfil.getEmail() + " Emoji: " + perfil.getEmoji() + " Id: " + perfil.getId());
        System.out.println("\n\t\r Perfil logado: " + perfilAtualLogado.getPerfilAtual().getApelido());
    }

    // Metodo para buscar perfil por email
    public static void buscarPerfilPorEmail(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja buscar o Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                Perfil perfil = redeSocial.buscarPerfilPorEmail(perfilAtualLogado.getPerfilAtual().getEmail());
                if (perfil != null) {
                    System.out.println("\n\t\r Perfil encontrado... Nome do proprietario: " + perfil.getApelido());
                } else {
                    System.out.println("\n\t\r Perfil não encontrado!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o email do perfil: ");
            String email = scanner.nextLine();
            Perfil perfil = redeSocial.buscarPerfilPorEmail(email);
            if (perfil != null) {
                System.out.println("\n\t\r Perfil encontrado... Nome do proprietario: " + perfil.getApelido());
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para buscar perfil por nome
    public static void buscarPerfilPorNome(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja buscar o Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                Perfil perfil = redeSocial.buscarPerfilPorNome(perfilAtualLogado.getPerfilAtual().getApelido());
                if (perfil != null) {
                    System.out.println("\n\t\r Perfil encontrado... Email do proprietario: " + perfil.getEmail());
                } else {
                    System.out.println("\n\t\r Perfil não encontrado!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o apelido do perfil: ");
            String nome = scanner.nextLine();
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                System.out.println("\n\t\r Perfil encontrado... Email do proprietario: " + perfil.getEmail());
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para buscar perfil por id
    public static void buscarPerfilPorId(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja buscar o Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                Perfil perfil = redeSocial.buscarPerfilPorId(perfilAtualLogado.getPerfilAtual().getId());
                if (perfil != null) {
                    System.out.println("\n\t\r Perfil encontrado... Nome do proprietario: " + perfil.getApelido());
                } else {
                    System.out.println("\n\t\r Perfil não encontrado!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o id do perfil: ");
            int id = Integer.parseInt(scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorId(id);
            if (perfil != null) {
                System.out.println("\n\t\r Perfil encontrado... Nome do proprietario: " + perfil.getApelido());
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }
    
    // Metodo para listar todos os perfis da rede social
    public static void listarTodosPerfis(RedeSocial redeSocial) {
        ArrayList<Perfil> perfis = redeSocial.listarTodosPerfils();
        for (Perfil perfil : perfis) {
            System.out.println("\n\t\r Perfil: " + perfil.getApelido() + " - Email: " + perfil.getEmail() + " - Emoji: "
                    + perfil.getEmoji());
        }
    }

    // Metodo para ativar perfil
    public static void ativarPerfil(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja ativar o Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                if (perfilAtualLogado.getPerfilAtual().getStatus()) {
                    System.out.println("\n\t\r Perfil já está ativado!");
                } else {
                    System.out.println("\n\t\r Deseja ativar o perfil? (S/N)");
                    String respostaAtivar = scanner.nextLine().toUpperCase();
                    if (respostaAtivar.equals("S")) {
                        redeSocial.ativarPerfil(perfilAtualLogado.getPerfilAtual(), new PerfilAvancado(perfilAtualLogado.getPerfilAtual().getApelido(),
                                perfilAtualLogado.getPerfilAtual().getEmoji(), perfilAtualLogado.getPerfilAtual().getEmail()));
                        System.out.println("\n\t\r Perfil ativado com sucesso!");
                    } else {
                        System.out.println("\n\t\r Perfil não ativado!");
                    }
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o id do perfil: ");
            int id = Integer.parseInt(scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorId(id);
            if (perfil != null) {
                System.out.println("\n\t\r Perfil encontrado... ");
                if (perfil.getStatus()) {
                    System.out.println("\n\t\r Perfil já está ativado!");
                } else {
                    System.out.println("\n\t\r Deseja ativar o perfil? (S/N)");
                    String respostaAtivar = scanner.nextLine().toUpperCase();
                    if (respostaAtivar.equals("S")) {
                        redeSocial.ativarPerfil(perfil,
                                new PerfilAvancado(perfil.getApelido(), perfil.getEmoji(), perfil.getEmail()));
                        System.out.println("\n\t\r Perfil ativado com sucesso!");
                    } else {
                        System.out.println("\n\t\r Perfil não ativado!");
                    }
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para desativar perfil
    public static void desativarPerfil(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja desativar o Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                if (!perfilAtualLogado.getPerfilAtual().getStatus()) {
                    System.out.println("\n\t\r Perfil já está desativado!");
                } else {
                    System.out.print("\n\t\r Deseja desativar o perfil? (S/N)");
                    String respostaDesativar = scanner.nextLine().toUpperCase();
                    if (respostaDesativar.equals("S")) {
                        redeSocial.desativarPerfil(perfilAtualLogado.getPerfilAtual(), new PerfilAvancado(perfilAtualLogado.getPerfilAtual().getApelido(),
                                perfilAtualLogado.getPerfilAtual().getEmoji(), perfilAtualLogado.getPerfilAtual().getEmail()));
                        System.out.println("\n\t\r Perfil desativado com sucesso!");
                    } else {
                        System.out.println("\n\t\r Perfil não desativado!");
                    }
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o id do perfil: ");
            int id = Integer.parseInt(scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorId(id);
            if (perfil != null) {
                System.out.println("\n\t\r Perfil encontrado... ");
                if (!perfil.getStatus()) {
                    System.out.println("\n\t\r Perfil já está desativado!");
                } else {
                    System.out.println("\n\t\r Deseja desativar o perfil? (S/N)");
                    String respostaDesativar = scanner.nextLine().toUpperCase();
                    if (respostaDesativar.equals("S")) {
                        redeSocial.desativarPerfil(perfil,
                                new PerfilAvancado(perfil.getApelido(), perfil.getEmoji(), perfil.getEmail()));
                        System.out.println("\n\t\r Perfil desativado com sucesso!");
                    } else {
                        System.out.println("\n\t\r Perfil não desativado!");
                    }
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para adicionar publicações
    public static void adicionarPublicacaoSimples(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja adicionar uma Publicacao Simples ao Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                System.out.print("\n\t\r Digite o conteudo da publicação: ");
                String conteudo = scanner.nextLine();
                Publicacao publicacao = new Publicacao(conteudo, perfilAtualLogado.getPerfilAtual());
                perfilAtualLogado.getPerfilAtual().adicionarPostagem(publicacao);
                redeSocial.adicionarPublicacao(publicacao);
                System.out.println("\n\t\r Publicação adicionada com sucesso!");
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o nome do perfil associado: ");
            String nome = scanner.nextLine();
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                System.out.print("\n\t\r Digite o conteudo da publicação: ");
                String conteudo = scanner.nextLine();
                Publicacao publicacao = new Publicacao(conteudo, perfil);
                perfil.adicionarPostagem(publicacao);
                redeSocial.adicionarPublicacao(publicacao);
                System.out.println("\n\t\r Publicação adicionada com sucesso!");
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para adicionar publicação avançada
    public static void adicionarPublicacaoAvancada(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja adicionar uma Publicacao Avançada ao Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                System.out.print("\n\t\r Digite o conteudo da publicação: ");
                String conteudo = scanner.nextLine();
                PublicacaoAvancada publicacao = new PublicacaoAvancada(conteudo, perfilAtualLogado.getPerfilAtual(), new ArrayList<Interacao>());
                perfilAtualLogado.getPerfilAtual().adicionarPostagem(publicacao);
                redeSocial.adicionarPublicacaoAvancada(publicacao);
                System.out.println("\n\t\r Publicação adicionada com sucesso!");
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o nome do perfil associado: ");
            String nome = scanner.nextLine();
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                System.out.print("\n\t\r Digite o conteudo da publicação: ");
                String conteudo = scanner.nextLine();
                PublicacaoAvancada publicacao = new PublicacaoAvancada(conteudo, perfil, new ArrayList<Interacao>());
                perfil.adicionarPostagem(publicacao);
                redeSocial.adicionarPublicacaoAvancada(publicacao);
                System.out.println("\n\t\r Publicação adicionada com sucesso!");
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para listar publicações
    public static void listarPublicacoes(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Voce deseja listar as Publicações do Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                ArrayList<Publicacao> publicacoes = redeSocial.listarPublicacoes(perfilAtualLogado.getPerfilAtual());
                if (!publicacoes.isEmpty()) {
                    for (Publicacao publicacao : publicacoes) {
                        System.out.println("\n\t\r ID: " + publicacao.getId() + " Conteúdo: " + publicacao.getConteudo() 
                            + " Data: " + publicacao.getDataPublicacao());
                    }
                } else {
                    System.out.println("\n\t\r Perfil não possui publicações!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Todas as publicações da rede...");
            ArrayList<Publicacao> publicacoes = redeSocial.listarPublicacoes(null);
            if (!publicacoes.isEmpty()) {
                for (Publicacao publicacao : publicacoes) {
                    System.out.println("\n\t\r ID: " + publicacao.getId() + " Conteúdo: " + publicacao.getConteudo() 
                        + " Data: " + publicacao.getDataPublicacao());
                }
            } else {
                System.out.println("\n\t\r Perfil não possui publicações!");
            }
        }
    }

    // Metodo para interagir com publicações
    public static void interagirComPublicacao(RedeSocial redeSocial, Scanner scanner) {
        System.out.print("\n\t\r Deseja ver todas as publicacoes da rede ou de um perfil especifico? (R/P): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("R")) {
            ArrayList<Publicacao> publicacoes = redeSocial.listarPublicacoes(null);
            for (Publicacao publicacao : publicacoes) {
                System.out.println("\n\t\r Publicação: " + publicacao.getConteudo() + " - ID: " + publicacao.getId());
            }
            System.out.print("\n\t\r Digite o id da publicação: ");
            int id = Integer.parseInt(scanner.nextLine());
            Publicacao publicacao = redeSocial.buscarPublicacaoPorId(id);
            if (publicacao instanceof Publicacao) {
                publicacao = redeSocial.transformarPublicacaoEmAvancada(id);
            }
            System.out.print("\n\t\r Qual reação deseja dar a publicação? (CURTIR, NAO_CURTIR, RISO, SURPRESA) :");
            TipoInteracao emoji = TipoInteracao.valueOf(scanner.nextLine());
            Interacao interacao = new Interacao(emoji, publicacao.getPerfilAssociado());
            boolean interacaoFeita = redeSocial.adicionarInteracaoAvancada(publicacao.getPerfilAssociado(), (PublicacaoAvancada) publicacao, interacao);
            if (interacaoFeita) {
                System.out.println("\n\t\r Reação adicionada com sucesso!");
            } else {
                System.out.println("\n\t\r Reação não adicionada!");  
            }
        } else {
            System.out.print("\n\t\r Digite o nome do perfil: ");
            String nome = (scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                ArrayList<Publicacao> publicacoes = redeSocial.listarPublicacoes(perfil);
                for (Publicacao publicacao : publicacoes) {
                    System.out
                            .println("\n\t\r Publicação: " + publicacao.getConteudo() + " - ID: " + publicacao.getId());
                }
                System.out.print("\n\t\r Digite o id da publicação: ");
                int id = Integer.parseInt(scanner.nextLine());
                Publicacao publicacao = redeSocial.buscarPublicacaoPorId(id);
                if (publicacao instanceof Publicacao) {
                    publicacao = redeSocial.transformarPublicacaoEmAvancada(id);
                }
                System.out.print("\n\t\r Qual reação deseja dar a publicação? (CURTIR, NAO_CURTIR, RISO, SURPRESA): ");
                TipoInteracao emoji = TipoInteracao.valueOf(scanner.nextLine());
                Interacao interacao = new Interacao(emoji, perfil);
                boolean interacaoFeita = redeSocial.adicionarInteracaoAvancada(publicacao.getPerfilAssociado(), (PublicacaoAvancada) publicacao, interacao);
                if (interacaoFeita) {
                    System.out.println("\n\t\r Reação adicionada com sucesso!");
                } else {
                    System.out.println("\n\t\r Reação não adicionada!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para enviar pedidos de amizade
    public static void enviarPedidoDeAmizade(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Deseja enviar um pedido de Amizade com o perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                System.out.print("\n\t\r Digite o apelido do perfil que deseja adicionar: ");
                String nome = (scanner.nextLine());
                Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
                if (perfil != null) {
                    redeSocial.enviarSolicitacaoAmizade(perfilAtualLogado.getPerfilAtual(), perfil);
                    System.out.println("\n\t\r Pedido de amizade enviado com sucesso!");
                } else {
                    System.out.println("\n\t\r Perfil não encontrado!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o apelido do perfil: ");
            String nome = (scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                System.out.print("\n\t\r Digite o apelido do perfil que deseja adicionar: ");
                String nomeAmigo = (scanner.nextLine());
                Perfil amigo = redeSocial.buscarPerfilPorNome(nomeAmigo);
                if (amigo != null) {
                    redeSocial.enviarSolicitacaoAmizade(perfil, amigo);
                    System.out.println("\n\t\r Pedido de amizade enviado com sucesso!");
                } else {
                    System.out.println("\n\t\r Perfil não encontrado!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para avaliar solicitação de amizade
    public static void solicitacaoDeAmizade(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Deseja ver as solicitação de Amizade com o perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                ArrayList<Perfil> solicitacoes = redeSocial.listarSolicitacoesAmizade(perfilAtualLogado.getPerfilAtual());
                if (!solicitacoes.isEmpty()) {
                    for (Perfil solicitacao : solicitacoes) {
                        System.out.println("\n\t\r Solicitação de: " + solicitacao.getApelido());
                    }
                    System.out.print("\n\t\r Digite o apelido do perfil que deseja aceitar ou negar: ");
                    String nomeSolicitante = (scanner.nextLine());
                    System.out.print("\n\t\r Deseja aceitar ou recusar a solicitação? (A/R): ");
                    String respostaAceitar = scanner.nextLine().toUpperCase();
                    if (respostaAceitar.equals("A")) {
                        Perfil perfilSolicitante = redeSocial.buscarPerfilPorNome(nomeSolicitante);
                        if (perfilSolicitante != null) {
                            redeSocial.aceitarSolicitacaoAmizade(perfilSolicitante, perfilAtualLogado.getPerfilAtual());
                            System.out.println("\n\t\r Solicitação de amizade aceita com sucesso!");
                        } else {
                            System.out.println("\n\t\r Perfil Solicitante não encontrado!");
                        }
                    } else {
                        Perfil perfilSolicitante = redeSocial.buscarPerfilPorNome(nomeSolicitante);
                        if (perfilSolicitante != null) {
                            redeSocial.recusarSolicitacaoAmizade(perfilSolicitante, perfilAtualLogado.getPerfilAtual());
                            System.out.println("\n\t\r Solicitação de amizade recusada com sucesso!");
                        } else {
                            System.out.println("\n\t\r Perfil Solicitante não encontrado!");
                        }
                    }
                } else {
                    System.out.println("\n\t\r Perfil não possui solicitações de amizade!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o apelido do perfil: ");
            String nome = (scanner.nextLine());
            Perfil perfilSolicitado = redeSocial.buscarPerfilPorNome(nome);
            if (perfilSolicitado != null) {
                ArrayList<Perfil> solicitacoes = redeSocial.listarSolicitacoesAmizade(perfilSolicitado);
                if (!solicitacoes.isEmpty()) {
                    for (Perfil solicitacao : solicitacoes) {
                        System.out.println("\n\t\r Solicitação de: " + solicitacao.getApelido());
                    }
                    System.out.print("\n\t\r Digite o apelido do perfil que deseja aceitar ou negar: ");
                    String nomeSolicitante = (scanner.nextLine());
                    System.out.print("\n\t\r Deseja aceitar ou recusar a solicitação? (A/R): ");
                    String respostaAceitar = scanner.nextLine().toUpperCase();
                    if (respostaAceitar.equals("A")) {
                        Perfil perfilSolicitante = redeSocial.buscarPerfilPorNome(nomeSolicitante);
                        if (perfilSolicitante != null) {
                            redeSocial.aceitarSolicitacaoAmizade(perfilSolicitante, perfilSolicitado);
                            System.out.println("\n\t\r Solicitação de amizade aceita com sucesso!");
                        } else {
                            System.out.println("\n\t\r Perfil Solicitante não encontrado!");
                        }
                    } else {
                        Perfil perfilSolicitante = redeSocial.buscarPerfilPorNome(nomeSolicitante);
                        if (perfilSolicitante != null) {
                            redeSocial.recusarSolicitacaoAmizade(perfilSolicitante, perfilSolicitado);
                            System.out.println("\n\t\r Solicitação de amizade recusada com sucesso!");
                        } else {
                            System.out.println("\n\t\r Perfil Solicitante não encontrado!");
                        }
                    }  
                } else {
                    System.out.println("\n\t\r Perfil não possui solicitações de amizade!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }

    // Metodo para listar amigos de um perfil
    public static void listarAmigos(RedeSocial redeSocial, Scanner scanner, PerfilAtualLogado perfilAtualLogado) {
        System.out.print("\n\t\r Deseja ver os amigos do Perfil Logado? (S/N): ");
        String resposta = scanner.nextLine().toUpperCase();
        if (resposta.equals("S")) {
            if (perfilAtualLogado.getPerfilAtual() != null) {
                ArrayList<Perfil> amigos = perfilAtualLogado.getPerfilAtual().listarAmigos();
                if (amigos != null) {
                    for (Perfil amigo : amigos) {
                        System.out.println("\n\t\r Amigo: " + amigo.getApelido());
                    }
                } else {
                    System.out.println("\n\t\r Perfil não possui amigos!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        } else {
            System.out.print("\n\t\r Digite o apelido do perfil: ");
            String nome = (scanner.nextLine());
            Perfil perfil = redeSocial.buscarPerfilPorNome(nome);
            if (perfil != null) {
                ArrayList<Perfil> amigos = perfil.listarAmigos();
                if (amigos != null) {
                    for (Perfil amigo : amigos) {
                        System.out.println("\n\t\r Amigo: " + amigo.getApelido());
                    }
                } else {
                    System.out.println("\n\t\r Perfil não possui amigos!");
                }
            } else {
                System.out.println("\n\t\r Perfil não encontrado!");
            }
        }
    }
}