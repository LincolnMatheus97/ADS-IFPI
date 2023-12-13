using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Lincoln_MatheusAPS.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) 
        {
        }
        public DbSet<Cliente> Cliente { get; set;}
        public DbSet<Vendedor> Vendedor { get; set;}
        public DbSet<Transportadora> Transportadora { get; set;}
        public DbSet<Pagamento> Pagamento { get; set;}
        public DbSet<NotaDeVenda> NotaDeVenda { get; set;}
        public DbSet<TipoDePagamento> TipoDePagamento { get; set;}
        public DbSet<PagamentoComCheque> PagamentoComCheque { get; set;}
        public DbSet<PagamentoComCartao> PagamentoComCartao { get; set;}
        public DbSet<Item> Item { get; set;}
        public DbSet<Produto> Produto { get; set;}
        public DbSet<Marca> Marca { get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NotaDeVenda>()
            .HasMany(n => n.Pagamentos)
            .WithOne(p => p.NotaDeVenda)
            .HasForeignKey(p => p.Id);
            modelBuilder.Entity<NotaDeVenda>()
            .HasMany(n => n.Items)
            .WithOne(i => i.NotaDeVenda)
            .HasForeignKey(i => i.Id);
            modelBuilder.Entity<NotaDeVenda>()
            .HasOne(n => n.Cliente)
            .WithMany(c => c.NotaDeVendas)
            .HasForeignKey(n => n.ClienteId);
            modelBuilder.Entity<NotaDeVenda>()
            .HasOne(n => n.Vendedor)
            .WithMany(v => v.NotaDeVendas)
            .HasForeignKey(n => n.Idv);
            modelBuilder.Entity<NotaDeVenda>()
            .HasOne(n => n.Transportadora)
            .WithMany(t => t.NotaDeVendas)
            .HasForeignKey(n => n.Idt);
            modelBuilder.Entity<TipoDePagamento>()
            .HasMany(t => t.NotaDeVendas)
            .WithOne(n => n.TipoDePagamento)
            .HasForeignKey(n => n.Idtp);
            modelBuilder.Entity<Item>()
            .HasOne(i => i.Produto)
            .WithMany(p => p.Items)
            .HasForeignKey(p => p.IdPd);
            modelBuilder.Entity<Produto>()
            .HasOne(p => p.Marca)
            .WithMany(m => m.Produtos)
            .HasForeignKey(p => p.IdM);
            modelBuilder.Entity<TipoDePagamento>()
            .HasDiscriminator<string>("Discriminator")
            .HasValue<PagamentoComCheque>("PagamentoComCheque")
            .HasValue<PagamentoComCartao>("PagamentoComCartao");

            base.OnModelCreating(modelBuilder);
        }
    }
}