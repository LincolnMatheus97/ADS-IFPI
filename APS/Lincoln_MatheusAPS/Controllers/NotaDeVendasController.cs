#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Lincoln_MatheusAPS.Models;

namespace Lincoln_MatheusAPS.Controllers
{
    public class NotaDeVendasController : Controller
    {
        private readonly MyDbContext _context;

        public NotaDeVendasController(MyDbContext context)
        {
            _context = context;
        }

        // GET: NotaDeVendas
        public async Task<IActionResult> Index()
        {
            if(TempData["SuccessMessage"] !=null)
            {
                ViewBag.SuccessMessage = TempData["SuccessMessage"];
            }
            else if(ViewData["ErrorMessage"] !=null)
            {
                ViewBag.ErrorMessage = TempData["ErrorMessage"];
            }

            var myDbContext = _context.NotaDeVenda.Include(n => n.Cliente).Include(n => n.TipoDePagamento).Include(n => n.Transportadora).Include(n => n.Vendedor);
            return View(await myDbContext.ToListAsync());
        }

        // GET: NotaDeVendas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var notaDeVenda = await _context.NotaDeVenda
                .Include(n => n.Cliente)
                .Include(n => n.TipoDePagamento)
                .Include(n => n.Transportadora)
                .Include(n => n.Vendedor)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (notaDeVenda == null)
            {
                return NotFound();
            }

            return View(notaDeVenda);
        }

        // GET: NotaDeVendas/Create
        public IActionResult Create()
        {
            ViewData["ClienteId"] = new SelectList(_context.Cliente, "ClienteId", "ClienteId");
            ViewData["Idtp"] = new SelectList(_context.TipoDePagamento, "Idtp", "Discriminator");
            ViewData["Idt"] = new SelectList(_context.Transportadora, "Idt", "Idt");
            ViewData["Idv"] = new SelectList(_context.Vendedor, "Idv", "Idv");
            return View();
        }

        // POST: NotaDeVendas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Tipo,Data,ClienteId,Idv,Idt,Idtp")] NotaDeVenda notaDeVenda)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Add(notaDeVenda);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Nota criado com sucesso!";
                    return RedirectToAction(nameof(Create));
                }
                catch(Exception ex)
                {
                    Console.WriteLine($"Erro ao criar nota: {ex.Message}");
                    TempData["ErrorMessage"] = "Erro ao criar Nota.";
                    throw;
                }
            }
            ViewData["ClienteId"] = new SelectList(_context.Cliente, "ClienteId", "ClienteId", notaDeVenda.ClienteId);
            ViewData["Idtp"] = new SelectList(_context.TipoDePagamento, "Idtp", "Discriminator", notaDeVenda.Idtp);
            ViewData["Idt"] = new SelectList(_context.Transportadora, "Idt", "Idt", notaDeVenda.Idt);
            ViewData["Idv"] = new SelectList(_context.Vendedor, "Idv", "Idv", notaDeVenda.Idv);
            return View(notaDeVenda);
        }

        // GET: NotaDeVendas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var notaDeVenda = await _context.NotaDeVenda.FindAsync(id);
            if (notaDeVenda == null)
            {
                return NotFound();
            }
            ViewData["ClienteId"] = new SelectList(_context.Cliente, "ClienteId", "ClienteId", notaDeVenda.ClienteId);
            ViewData["Idtp"] = new SelectList(_context.TipoDePagamento, "Idtp", "Discriminator", notaDeVenda.Idtp);
            ViewData["Idt"] = new SelectList(_context.Transportadora, "Idt", "Idt", notaDeVenda.Idt);
            ViewData["Idv"] = new SelectList(_context.Vendedor, "Idv", "Idv", notaDeVenda.Idv);
            return View(notaDeVenda);
        }

        // POST: NotaDeVendas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Tipo,Data,ClienteId,Idv,Idt,Idtp")] NotaDeVenda notaDeVenda)
        {
            if (id != notaDeVenda.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(notaDeVenda);
                    await _context.SaveChangesAsync();
                    TempData["SuccessMessage"] = "Dados editado com sucesso!";
                    return RedirectToAction(nameof(Edit), new{id});
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!NotaDeVendaExists(notaDeVenda.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            ViewData["ClienteId"] = new SelectList(_context.Cliente, "ClienteId", "ClienteId", notaDeVenda.ClienteId);
            ViewData["Idtp"] = new SelectList(_context.TipoDePagamento, "Idtp", "Discriminator", notaDeVenda.Idtp);
            ViewData["Idt"] = new SelectList(_context.Transportadora, "Idt", "Idt", notaDeVenda.Idt);
            ViewData["Idv"] = new SelectList(_context.Vendedor, "Idv", "Idv", notaDeVenda.Idv);
            return View(notaDeVenda);
        }

        // GET: NotaDeVendas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var notaDeVenda = await _context.NotaDeVenda
                .Include(n => n.Cliente)
                .Include(n => n.TipoDePagamento)
                .Include(n => n.Transportadora)
                .Include(n => n.Vendedor)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (notaDeVenda == null)
            {
                return NotFound();
            }

            return View(notaDeVenda);
        }

        // POST: NotaDeVendas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            try
            {
                var notaDeVenda = await _context.NotaDeVenda.FindAsync(id);
                if (notaDeVenda == null)
                {
                    TempData["ErrorMessage"] = "Nota não encontrado.";
                }
                else 
                {
                    _context.NotaDeVenda.Remove(notaDeVenda);
                    await _context.SaveChangesAsync();
            
                    TempData["SuccessMessage"] = "Dados deletado com sucesso!";
                    TempData["DeletedClienteId"] = id;
                }

              return RedirectToAction(nameof(Index));
            }  
            catch(Exception ex)
            {
                TempData["ErrorMessage"] = $"Erro ao deletar dados: {ex.Message}";
                return RedirectToAction(nameof(Index));
            } 
        }

        private bool NotaDeVendaExists(int id)
        {
            return _context.NotaDeVenda.Any(e => e.Id == id);
        }
    }
}
